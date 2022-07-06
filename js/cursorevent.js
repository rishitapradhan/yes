AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{
            type:'string',
            default:'',
        }
    },

    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },

    handlePlacesListState:function(){
        const id = this.el.getAttribute('id')
        const placesId = ["taj-mahal","budapest","eiffel-tower","new-york-city"]
        if(placesId.includes(id)){
            const placesContainer= document.querySelector("#places-container")
            placesContainer.setAttribute("cursor-listener", {
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"black",
                opacity:1,
            })
        }
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave", ()=>{
            const {selectedItemId}=this.data
            if (selectedItemId){
                const element = document.querySelector(`#${selectedItemId}`)
                const id = element.getAttribute('id')
                if (id==selectedItemId){
                    element.setAttribute('material',{
                        color:'white',
                        opacity:1
                    })
                }
            }
        })
    },

})
