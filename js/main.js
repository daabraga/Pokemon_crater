import getRndInteger from './utils/getRndInteger'

const pokemons = {
    charmander: {
        hp: 100,
        sp: 50,
        atks: {
            ember: {
                minDmg: 4,
                maxDmg: 8,
                sp: 1,
                type: 'fire'
            },
        },
        type: 'fire',
        hit(atk, target) {
            const dmg = getRndInteger(atk.minDmg, atk.maxDmg) // elaboracao do dano
            this.sp -= atk.sp // gasto de mana
            target.hp -= dmg // hit no pokemon alvo
        }
    },

    squirtle: {
        atks: {
            bubble: {
                minDmg: 4,
                maxDmg: 8,
                sp: 1
            }
        },
        type: 'water'
    },

    bulbassaur: {
        atks: {
            razorleaf: {
                minDmg: 4,
                maxDmg: 8,
                sp: 1
            }
        },
        type: 'grass'
    },
    
}

const doAtk = (atk, target) => {

}

console.log(pokemons.bulbassaur)