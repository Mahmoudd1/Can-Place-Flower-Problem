/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length===1)
        {    if (flowerbed[0]===0)
                n--;
        }
        else{
        for (let i=0;i<flowerbed.length;i++)
        {
            if (flowerbed[i]!==1)
            {
            if (i>0 && i<flowerbed.length-1)
            {
                if (flowerbed[i-1]!==1&&flowerbed[i+1]!==1)
                {
                    flowerbed[i]=1;    
                    n--;
                }
            }
            if (i===0&&flowerbed[i+1]===0)
            {
                flowerbed[i]=1;    
                n--;
            }
            if (i===flowerbed.length-1&&flowerbed[i-1]===0)
            {
                flowerbed[i]=1;    
                n--;
            }
            }
        }
        }
        if (n>0)
            return false;
        return true;
};
