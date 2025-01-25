import { defineStore } from "pinia";
import { useApi } from '@/composables/useApi'; 

export const useProductStore= defineStore('product',{   
    state: () => ( 
        {
            count:0,
            products: [],
            product: {
                id: '',
                title: '',
                description: '',
                price: '',
                quantity: '',
                categoryProductId: '',
                subCategoryProductId:'',
                currency: '',
                url_img: '',
            }
        }
    ),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        async increment() {
            this.count++
        },
        async getProducts(){
            console.log('addsa');
            const API_URL = useApi().value;
                const response = await fetch(`${API_URL}/product`);
                this.products = await response.json().then((data) => data.data);
  
        },
        async createProduct(){
            const response = await fetch(`${useApi().value}/product`,{ 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.product.title,
                    description: this.product.description,
                    price: this.product.price,
                    quantity: this.product.quantity,
                    categoryProductId: this.product.categoryProductId,
                    subCategoryProductId: this.product.subCategoryProductId,
                })
            });
            const data = await response.json();
            console.log(data);
        }
    },
})