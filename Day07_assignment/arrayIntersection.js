let intersection = (arr1, arr2) => 
{    
    let arr3 = []
    let k = 0;
    
    for (let i = 0; i<arr1.length; i++)
    { 
                
        for (let j = 0; j<arr2.length; j++)
            {
                if (arr1[i] === arr2[j])
                    {
                        if (!arr3.includes(arr1[i]))
                        {
                            arr3[k] = arr1[i];
                            k++;

                        }                        
                        
                    }  
                                    
            } 
                    
    }  
            console.log (arr3)
           
}       
const set1 = [1,3,5,7,9,11]
const set2 = [2,4,5,6,7,9]

const set3 = [7,6,5,4,3,2]
const set4 = [7,6,5,4,3,2]

const set5 = [1,2,3,4,5]
const set6 = [6,7,8,9]

intersection (set1,set2)
intersection (set3,set4)
intersection (set5,set6)