/* import constants from '../constants';

class ToDoService { 
    url = constants.url;
    apiKey = constants.apiKey;
    endpoint = 'todos';

    async getToDos(){
        try{
        const response = await fetch(`${this.url}/${this.endpoint}/all/`)
        if(!response.ok){
            throw new Error ()
        }
        const json = await response.json(); 
        if (json.success){
            return json.data;
            else{

            }
        }
        } catch(error) {
            console.error(error);

            return[];

        }
    }

}

export default ToDoService; */