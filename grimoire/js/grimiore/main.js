// Put your code here

console.log("Do you believe in magic?")
console.log("------------------------")

const AllSpells = {
    Spells: [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyRequired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyRequired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyRequired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyRequired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyRequired: 2921.5
        }
    ]
}

const GetSpells = () => {
    return AllSpells.Spells.map(spells => ({...spells}))
}

const spells = GetSpells()

// for (const spell of spells) {
//     if (spell.IsEvil){
//         console.log(`Evil Book: ${spell.Name}`)
//     } else {
//         console.log(`Good Book: ${spell.Name}`)
//     }
// }




const MakeGoodSpellBook = () => {
    const goodBook = spells.find(
        (spell) => {
            return spell.IsEvil === false
        }
    )
    return goodBook
}

const MakeEvilSpellBook = () => {
    const evilBook = spells.find(
        (spell) => {
            return spell.IsEvil === true
        }
    )
    return evilBook
}


const goodBook = MakeGoodSpellBook(spells)
const evilBook = MakeEvilSpellBook(spells)

// const DisplaySpellBooks()