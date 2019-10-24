export default {
	namespace: 'products',
	state: [],
	reducers: {
		delete(state, {payLoad111: id}) {
		  console.log(id);
			return state.filter(item => item.id !== id);
		},
    add(state, {payLoad: element}) {
      console.log(element);
      return state.concat(element);
      //return state;
    },
	},
};
