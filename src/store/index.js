import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                { 
                    id: 'm1', 
                    image: "https://images.unsplash.com/photo-1608382956294-8ed6afe0dfb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    title: 'A trip to the mountains', 
                    desription: 'It was a really nice trip!'
                },
                { 
                    id: 'm2', 
                    image: "https://images.unsplash.com/photo-1608585266151-854cab1a6327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    title: 'Watching Apocalypto', 
                    desription: 'Having a good family time.'
                },
                { 
                    id: 'm3', 
                    image: 'https://images.unsplash.com/photo-1608608341889-6ff29021c3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
                    title: 'Going for Adventure', 
                    desription: 'Climbing the mountain with a friend.'
                },
            ]
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            };
        }
    }
});

export default store;