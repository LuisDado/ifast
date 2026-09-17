import sushi from "../assets/sushi.png";
import pizza from "../assets/pizza.png";
import hamburger from "../assets/hamburguer.png";

function Time (){
    return(
        <div className="time">
            <button><img src="{sushi}" alt="Sushi" /></button>
        
            <button><img src="{pizza}" alt="Pizza" /></button>

            <button><img src="{hamburguer}" alt="Hambúrguer" /></button>
        

        </div>
    );
}

export default Time;