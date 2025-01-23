<template src="./VCalendario.html"></template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { Trash, X } from "lucide-vue-next"
import VueDraggable from "vuedraggable"

interface CalendarioBlock {
  id: string
  position: number
  start: number
  end: number
  type: "limpieza" | "cocina" | "mantenimiento" | "marketing"
  title: string
  description: string
}

export default {
  components: {
    VueDraggable,
    Trash,
    X,
  },
  setup() {
    const timeSlots = ["00:00 AM", "4:00 AM", "8:00 AM", "12:00 PM", "4:00 PM", "8:00 PM", "12:00 AM"]

    const colorMap: Record<CalendarioBlock["type"], string> = {
      limpieza: "bg-red-500",
      cocina: "bg-green-500",
      mantenimiento: "bg-blue-600",
      marketing: "bg-pink-500",
    }

    const blocks = ref<CalendarioBlock[]>([])
    const selectedBlock = ref<CalendarioBlock | null>(null)
    const selectedColor = ref<CalendarioBlock["type"] | null>(null)
    const isDragging = ref<boolean>(false)
    const timelineRef = ref<HTMLDivElement | null>(null)

    const handleTimelineClick = (e: MouseEvent) => {
      if (!selectedColor.value || !timelineRef.value) return

      const rect = timelineRef.value.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const position = (x / rect.width) * 100
      const start = (y / rect.height) * 100

      // Check for overlap
      const overlap = blocks.value.some(
        (block) =>
          Math.abs(block.position - position) < 10 &&
          ((start >= block.start && start <= block.end) || (start + 15 >= block.start && start + 15 <= block.end)),
      )

      if (overlap) return

      const newBlock: CalendarioBlock = {
        id: Date.now().toString(),
        position,
        start,
        end: Math.min(start + 15, 100),
        type: selectedColor.value,
        title: "",
        description: "",
      }

      blocks.value.push(newBlock)
      selectedColor.value = null
    }

    const updateBlock = (id: string, updates: Partial<CalendarioBlock>) => {
      const index = blocks.value.findIndex((block) => block.id === id)
      if (index !== -1) {
        blocks.value[index] = { ...blocks.value[index], ...updates }
      }
    }

    const handleMouseDown = (e: MouseEvent, block: CalendarioBlock, edge: "start" | "end") => {
      e.stopPropagation()
      isDragging.value = true
      const handleMouseMove = (e: MouseEvent) => {
        if (!timelineRef.value) return
        const rect = timelineRef.value.getBoundingClientRect()
        const y = e.clientY - rect.top
        const percentage = Math.max(0, Math.min(100, (y / rect.height) * 100))

        let newStart = block.start
        let newEnd = block.end

        if (edge === "start") {
          newStart = Math.min(percentage, block.end - 5)
        } else {
          newEnd = Math.max(percentage, block.start + 5)
        }

        // Check for overlap
        const overlap = blocks.value.some(
          (otherBlock) =>
            otherBlock.id !== block.id &&
            Math.abs(otherBlock.position - block.position) < 10 &&
            ((newStart >= otherBlock.start && newStart <= otherBlock.end) ||
              (newEnd >= otherBlock.start && newEnd <= otherBlock.end)),
        )

        if (!overlap) {
          updateBlock(block.id, { start: newStart, end: newEnd })
        }
      }
      const handleMouseUp = () => {
        isDragging.value = false
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    const saveBlockDetails = () => {
      if (selectedBlock.value) {
        updateBlock(selectedBlock.value.id, {
          title: selectedBlock.value.title,
          description: selectedBlock.value.description,
        })
        selectedBlock.value = null
      }
    }

    const deleteBlock = (id: string) => {
      blocks.value = blocks.value.filter((block) => block.id !== id)
      selectedBlock.value = null
    }

    const setSelectedBlock = (block: CalendarioBlock | null) => {
      selectedBlock.value = block ? { ...block } : null
    }

    const setSelectedColor = (color: CalendarioBlock["type"]) => {
      selectedColor.value = color
    }

    onMounted(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (timelineRef.value && !timelineRef.value.contains(e.target as Node)) {
          selectedBlock.value = null
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      onUnmounted(() => {
        document.removeEventListener("mousedown", handleClickOutside)
      })
    })

    return {
      timeSlots,
      colorMap,
      blocks,
      selectedBlock,
      selectedColor,
      isDragging,
      timelineRef,
      handleTimelineClick,
      handleMouseDown,
      saveBlockDetails,
      deleteBlock,
      setSelectedBlock,
      setSelectedColor,
    }
  },
}
</script>

<style src="./VCalendario.css" scoped></style>
