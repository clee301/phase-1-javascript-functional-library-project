myEach = (collection, callback) => {
	
    const myType = Array.isArray(collection)
      
    if(myType != true){
        const obj = Object.entries(collection)
      obj.forEach(function(x){
          return callback(x[1])
      })
    } else{
        collection.forEach(function(x, y){
          return callback(x[y])
      })
    }
    return collection
  }


function myMap(collection, callback) {	

    const myType = Array.isArray(collection)
       let newArray = ""
     
     if(myType != true){
         const obj = Object.entries(collection)
       const objMap = obj.map(function(x,y){
           const newFunction = callback(x[1])
         return newFunction
       }) 
       
       newArray = objMap
       
     } else{
         const arrMap = collection.map(function(x, y){
           const cbFunction = callback(x) 
         return cbFunction
       })  
       newArray = arrMap
     }
       return newArray
   }



function myReduce(collection, callback, acc){
	
    const myType = Array.isArray(collection)
    if(myType != true){
        const obj = Object.values(collection).reduce(callback)
        return obj
          
      } else {              
          if(!acc){
            let initial = 0
            const reduc = collection.reduce(callback)
            const reduc2 = reduc + initial
            return reduc2
    } else {
        const reduc3 = collection.reduce(callback, acc)
        return reduc3
      }
    }
      
  }

  function myFind(collection, predicate){
	
    const myArr = collection.find(predicate)
  
    return myArr
  }

  function myFilter(collection, predicate){
	
    const myType = Array.isArray(collection)
    
    if(myType != true){
          const obj = Object.values(collection).filter(predicate)
          return obj
            
        } else{
            const myArr = collection.filter(predicate)
  
            return myArr      
        }
  }

  function mySize(collection){
	
    const myType = Array.isArray(collection)
      
      if(myType != true){
            const obj = Object.values(collection).length
            return obj
              
          } else {
             const size = collection.length
    return size
          } 
  }


  function myFirst(array, n){
	
    if(!n){  
      return array[0]  
      } else{  
      return array.slice(0,n)
      }
    }


    function myLast(array, n){
	
      if(!n){  
        return array[array.length - 1]  
        } else{  
        return array.slice(-n)
        }
      }


      function myKeys(object){
        return Object.keys(object)
      }

      function myValues(object){
        return Object.values(object)
      }
