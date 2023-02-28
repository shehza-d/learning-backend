module.exports = (io) => {
	const createOrder = function (payload) {
	  const socket = this; // hence the 'function' above, as an arrow function will not work
	  // ...
	};
  
	const readOrder = function (orderId, callback) {
	  // ...
	};
  
	return {
	  createOrder,
	  readOrder
	}
  }