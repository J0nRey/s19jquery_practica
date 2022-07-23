//<!-- Ejercicio 1 . 0 -->

$('#btn-scuare').click( () => {
    $('.toggle-figure').removeClass("rectangle")
    $('.toggle-figure').removeClass("circle")
    $('.toggle-figure').addClass("square")
})

$('#btn-rectangle').click( () => {
    $('.toggle-figure').removeClass("scuare")
    $('.toggle-figure').removeClass("circle")
    $('.toggle-figure').addClass("rectangle")
})

$('#btn-circle').click( () => {
    $('.toggle-figure').removeClass("scuare")
$('.toggle-figure').addClass("rectangle")
    $('.toggle-figure').addClass("circle")
})

//<!-- Ejercicio 1 . 1 -->

$(".controls-wrapper input[type='radio']").click( () => {
    let selection = $(".controls-wrapper input[type='radio']:checked").val()
    console.log(selection)
    $("#mutable-shape").removeClass().addClass(selection)
})


//<!-- Ejercicio 1 . 1 -->

let images = [
    'https://www.trecebits.com/wp-content/uploads/2020/02/meme-kid.jpg',
    'https://i.ytimg.com/vi/SdtJ7AuCB9w/maxresdefault.jpg',
    'https://spoiler.bolavip.com/__export/1614872879996/sites/bolavip/img/2021/03/04/kathryn_hahn_reacciona_a_los_memes_virales_de_agatha_harkness_en_wandavision_crop1614872851585.jpg_2024461655.jpg',
    'https://assets.entrepreneur.com/content/3x2/2000/20180706133830-meme.jpeg?width=700&crop=2:1',
    'https://static.toiimg.com/photo/78679919.cms'
]

let img = 0

    $("#after").click( () => {
        img = img + 1
        $("#change-img").attr("src",images[img]); // .attr() --> Cuando se usa este método para devolver el valor del atributo, devuelve el valor del PRIMER elemento coincidente.
        console.log(img);
        $("#before").prop('disabled', false) // .prop() --> Cuando se usa este método para devolver el valor de la propiedad, devuelve el valor del PRIMER elemento coincidente.
        let cantImages = images.length - 1
        if (img > cantImages - 1) {
            $("#after").prop('disabled', true);
            console.log('para')
        }
    }) 

    $("#before").click( () => {
        img = img - 1
        $("#change-img").attr("src",images[img]);
            console.log(img); 
        $("#after").prop('disabled', false)
        if (img < 1) {
            $("#before").prop('disabled', true);
            console.log('para')
        } 
    }) 


//    <!-- Ejercicio 1 . 1 -->


let imgIndex = 0; // variable de estado
let imgArray = [
    "https://picsum.photos/id/169/500/300",
    "https://picsum.photos/id/170/500/300",
    "https://picsum.photos/id/171/500/300",
    "https://picsum.photos/id/172/500/300",
    "https://picsum.photos/id/173/500/300"
]

const setImgSrc = src => {
   // $(".galery-wrapper img").attr("src", src) //attr = atruibute
      $(".galery-wrapper img").fadeTo("slow",0, () => {
        $(".galery-wrapper img").attr("src",src)
        setTimeout( function(){
            $(".galery-wrapper img").fadeTo("slow",1)
        },300)
      })
}


const setButtonsState = () => {
    
    imgIndex === 0 
        ? $(".backward").attr("disabled", true) 
        : $(".backward").attr("disabled", false)

    imgIndex === imgArray.length - 1 
        ? ($(".forward").attr("disabled", true), $(".add-slides").removeClass("d-none"))
        : ($(".forward").attr("disabled", false), $(".add-slides").addClass("d-none"))
}

setButtonsState()


const forward = () => {
        imgIndex++
        let src = imgArray[imgIndex]
        setImgSrc(src)
        setButtonsState()
    }


const backward = () => {
        imgIndex--
        let src = imgArray[imgIndex]
        setImgSrc(src)
        setButtonsState()
    }


const addSlides = amount => {
    for( let i = 0; i < amount; i++){
        let randomId = Math.floor(Math.random() * ( 255 - 1 ) + 1)
        console.log(randomId)
        let url = `https://picsum.photos/id/${randomId}/500/300`
        imgArray.push( url )
    }
    setButtonsState()
}



$(".forward").click( forward )
$(".backward").click( backward )
$(".add-slides").click( () => {
    addSlides(5)
})

// setImgSrc("https://picsum.photos/id/171/500/300")