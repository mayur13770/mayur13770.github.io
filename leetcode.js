
          const apiurl='https://leetcode-stats-api.herokuapp.com/mayuresh1377'
          async function ok()
          {
            const response =await fetch(apiurl);
            const data=await response.json();
            console.log(data);
            var totalcount=data.totalSolved;
            var easycount=data.easySolved;
            var mediumcount=data.mediumSolved;
            var hardcount=data.hardSolved;
            var rate=data.acceptanceRate;
        
            function counttotal(){
                let from = 300;
                let to = totalcount;
                let step = 1;
                let interval = 5;
        
                if(from == to){
                    document.querySelector("#total").textContent = from;
                    return;
                }
        
                let counter = setInterval(function(){
                    from += step;
                    document.querySelector("#total").textContent = from;
        
                    if(from == to){
                        clearInterval(counter);
                    }
                }, interval);
            }
            /*
            function acceptrate(){
                let from = 0;
                let to = rate;
                let step = 1;
                let interval = 5;
        
                if(from == to){
                    document.querySelector("#ratee").textContent = from;
                    return;
                }
        
                let counter = setInterval(function(){
                    from += step;
                    document.querySelector("#ratee").textContent = from;
        
                    if(from == to){
                        clearInterval(counter);
                    }
                }, interval);
            }
            */
            function counteasy(){
                let from = 0;
                let to = easycount;
                let step = 1;
                let interval = 10;
        
                if(from == to){
                    document.querySelector("#easy").textContent = from;
                    return;
                }
        
                let counter = setInterval(function(){
                    from += step;
                    document.querySelector("#easy").textContent = from;
        
                    if(from == to){
                        clearInterval(counter);
                    }
                }, interval);
            }
            function countmedium(){
                let from = 0;
                let to = mediumcount;
                let step = 1;
                let interval = 20;
        
                if(from == to){
                    document.querySelector("#medium").textContent = from;
                    return;
                }
        
                let counter = setInterval(function(){
                    from += step;
                    document.querySelector("#medium").textContent = from;
        
                    if(from == to){
                        clearInterval(counter);
                    }
                }, interval);
            }
            function counthard(){
                let from = 0;
                let to = hardcount;
                let step = 1;
                let interval = 380;
        
                if(from == to){
                    document.querySelector("#hard").textContent = from;
                    return;
                }
        
                let counter = setInterval(function(){
                    from += step;
                    document.querySelector("#hard").textContent = from;
        
                    if(from == to){
                        clearInterval(counter);
                    }
                }, interval);
            }
            function isIntoView(elem)
            {
                var documentViewTop = $(window).scrollTop();
                var documentViewBottom = documentViewTop + $(window).height();
        
                var elementTop = $(elem).offset().top;
                var elementBottom = elementTop + $(elem).height();
        
                return ((elementBottom<=documentViewBottom) && (elementTop >= documentViewTop));
            }
            var flag=0;
              $(window).scroll(function(){
               if (isIntoView($('#total'))&&(flag==0)){
                 counttotal();
                 counteasy();
                 countmedium();
                 counthard();
                 flag=1;
                }
        
            })
            counttotal();
            counteasy();
            countmedium();
            counthard();
        
          }
          ok();