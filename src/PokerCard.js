import React , {Component} from 'react';
// const POKER_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKER_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';


const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokercard extends Component {

    render() { 
        const {id,name,exp,rocc} = this.props
    
        let imgSrc = `${POKER_API}${padToThree(id)}.png`
        return (
            <div className="Pokercard">
                <h2>{name}</h2>
                <img src={imgSrc}  alt={`${name}_poker_card`} />
                <p>{exp}{rocc}</p>
            </div>
            
        );
    }
}

export default Pokercard;