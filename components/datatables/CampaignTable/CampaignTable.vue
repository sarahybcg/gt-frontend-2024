<template src="./CampaignTable.html"></template>

<script>
import { Edit2, Trash2, Eye } from "lucide-vue-next"; // Librería para visualizar botones.

export default {
  name: "CampaignTable",
  components: {
    Edit2,
    Trash2,
    Eye,
  },
  data() {
    return {
      campaigns: [
        {
          name: "Campaña de Verano",
          startDate: "2024-06-01",
          endDate: "2024-08-31",
          status: "Activa",
          roi: "150%",
        },
        {
          name: "Promoción de Otoño",
          startDate: "2024-09-01",
          endDate: "2024-11-30",
          status: "Pausada",
          roi: "120%",
        },
        {
          name: "Halloween 2014",
          startDate: "2024-10-31",
          endDate: "2024-11-01",
          status: "Finalizada",
          roi: "150%",
        },
        {
          name: "Navidad 2024",
          startDate: "2024-12-01",
          endDate: "2024-12-31",
          status: "Pendiente",
          roi: "200%",
        },
      ],
    };
  },
  methods: {
    editCampaign(campaign) {
      console.log("Editar campaña:", campaign);
    },
    pauseCampaign(campaign) {
      console.log("Eliminar campaña:", campaign);
    },
    endCampaign(campaign) {
      console.log("Ver campaña:", campaign);
    },
  },
};
</script>

<style scoped src="./CampaignTable.css"></style>
