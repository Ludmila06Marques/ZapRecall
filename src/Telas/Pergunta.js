import React from "react"
export default function Pergunta(props){
    const [flip , setFlip]= React.useState("backface escondido ")
    const[pergunta , setPergunta]=React.useState("frontface")
    const [resposta , setResposta]=React.useState("awnser escondido")
    const [escolherRed , setEscolherRed]=React.useState("opcao red")
    const [escolherOrange , setEscolherOrange]=React.useState("opcao orange")
    const [escolherGreen , setEscolherGreen]=React.useState("opcao green")
    const [iconeType , setIconeType]=React.useState("play-outline")
    const[iconeColor , setIconeColor]=React.useState("icone")
    function Virar(){
        setFlip("backface")
        setPergunta("frontface escondido")
    }
    function Resposta(){
        setFlip("backface escondido")
        setResposta("awnser")
    }
    function EscolherRed(){
        setResposta("awnser escondido")
        setPergunta("frontface errou")
        setIconeType("close-circle-outline")
        setIconeColor("icone red redondo")
    }
    function EscolherGreen(){
        setResposta("awnser escondido")
        setPergunta("frontface acertou")
         setIconeType("checkmark-circle-outline")
        setIconeColor("icone green redondo")
    }
    function EscolherOrange(){
        setResposta("awnser escondido")
        setPergunta("frontface maisoumenos")
        setIconeType("help-circle-outline")
        setIconeColor("icone orange redondo")
      
    }
    return( <div  class="pergunta">
    <div onClick={Virar} class={pergunta}>
    <h3>{props.titulo}</h3><ion-icon class={iconeColor} name={iconeType}></ion-icon>
    </div>
    <div class={flip}><h3>{props.pergunta}</h3>
    <img onClick={Resposta} src="./img/setinha.png" alt="setinha"/>
    </div>
<div  class={resposta}><h3>{props.resposta}</h3>
    <div class="opcoes">
    <div onClick={EscolherRed} class={escolherRed}><h1>Não lembrei</h1></div>
    <div onClick={EscolherOrange} class={escolherOrange}><h1>Quase não lembrei</h1></div>
    <div onClick={EscolherGreen} class={escolherGreen}><h1>Zap!</h1></div>
    </div>
</div>
</div> )
}