function solve() {
    function decoratorFight(state) {
        state.fight = () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    }

    function decoratorMage(state) {
        state.cast = (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    }

    let fighter = (name) => {
        let fighterState = {
            name: name,
            health: 100,
            stamina: 100
        }
        decoratorFight(fighterState);
        return fighterState;
    }

    let mage = (name) => {
        let mageState = {
            name: name,
            health: 100,
            mana: 100
        }
        decoratorMage(mageState);
        return mageState;
    }

    return {fighter, mage};
 }

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);