const createStore = () => {

  let data = {};

  return {
  	set: function(key,value)
  	{
  		data[key] = value;
  		return value;
  	},
  	get: function(key)
  	{
  		return data[key];
  	},
  	keys: function()
  	{
  		return Object.keys(data);
  	},
  	clear: function()
  	{
  		return data = {};
  	},
  };

};

createStore();
module.exports = createStore;
