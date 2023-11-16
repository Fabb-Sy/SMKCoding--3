export const useCategoryStore = defineStore("category", {
    state: () => ({
    categories: {} as any,
    status: false,
    message: "",
    }),
    actions: {
    async getAllCategory(){
    const { baseUrl, apikey } = useAppConfig();
    const {data, error} = await useFetch("/rest/v1/categories", {
    baseURL: baseUrl,
    method: "GET",
    headers: {
    apikey: apikey,
    },
    async createCategory(newCategory) {
    try {
      console.log('Creating category:', newCategory);
      // Implement logic to create category (e.g., use Supabase API)
      const response = await supabase.from('categories').insert([newCategory]);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  },
    })
    
    if(error.value){
    this.status = false;
    this.message = "Get Products Failed !!!";
    }else if(data){
    this.status = true;
    this.message = "Get Products successfully";
    this.categories = data.value;
    }
    },
    async createCategory(newCategory: Category) {
        try {
          const { baseUrl, apikey } = useAppConfig();
          const { data, error } = await useFetch('/rest/v1/categories', {
            baseURL: baseUrl,
            method: 'GET',
            headers: {
              apikey: apikey,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCategory),
          });
  
          if (error.value) {
            this.status = false;
            this.message = 'Create Category Failed !!!';
          } else if (data) {
            this.status = true;
            this.message = 'Create Category successfully';
            this.categories.push(data.value); // Tambahkan category baru ke array categories
          }
        } catch (error) {
          console.error('Error creating category:', error);
          // Handle error (e.g., show an error message)
        }
      },
    }
    })