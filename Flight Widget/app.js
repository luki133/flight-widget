const tableBody = document.getElementById("tableBody") // handle div by id "tableBody" to move on with code
const title = document.querySelector(".title")
let flights = [ //data objects which i need to show on screen with properties: time, destination, flight, gate, remarks
//if i want data from popery i have to use nameOfTable + nameOfPropery (e.g flights.time)
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A01",
        remarks: "ON TIME"
    },
    {
        time: "16:21",
        destination: "USA",
        flight: "PL 876",
        gate: "A05",
        remarks: "DELAYED"
    },
    {
        time: "23:54",
        destination: "FRANCE",
        flight: "OG 427",
        gate: "A05",
        remarks: "CANCELLED"
    },
    {
        time: "09:42",
        destination: "SPAIN",
        flight: "FR 365",
        gate: "A02",
        remarks: "DELAYED"
    },
    {
        time: "13:49",
        destination: "EGYPT",
        flight: "HU 486",
        gate: "A03",
        remarks: "ON TIME"
    }
  
]

const destination = ["OMAN", "USA", "FRANCE", "SPAIN", "EGYPT", "BIRUT"] // I need destination data to print on screen (not from object)
const remarks = ["ON TIME", "DELAYED", "CANCELLED"] //the same thing as above in commentary
let hour = 0

    title.textContent = "Random departues"

function populateTable(){
    for(const flight of flights){ //for every property flight
        const tableRow = document.createElement("tr") // I create tableRow

        for(const flightDetail in flight){ //for every tr created above
            const tableCell = document.createElement("td") //i create data for every tr
            const word = Array.from(flight[flightDetail]) // I insert all data from table 
            

            for(const [index, letter] of word.entries()){ //as many are elements in table as we do:
                const letterElement = document.createElement("div") //create div

                setTimeout(() =>{
                    letterElement.classList.add("flip")
                    letterElement.textContent = letter
                    tableCell.appendChild(letterElement) //in table data (tableCell) i give on letter from every data from objects
                }, 100 * index) // do animation synchronously for every letter
            }
            tableRow.appendChild(tableCell) // append content of table (flight, destination etc.)
        }
        
        tableBody.appendChild(tableRow) //set tableRow on website
    }
}

populateTable()

function generateRandomLetter(){
    const alphabet  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const randomLetter = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    return randomLetter
}

function generateRandomNumber(maxNumber){
    const numbers = "0123456789"
    if(maxNumber){
        const newNumbers = numbers.slice(0, maxNumber + 1) // delete numbers in parameter's function
        const randomNumbers = numbers.charAt(Math.floor(Math.random() * maxLength.length))
        return randomNumbers
    }
    const Numbers = numbers.charAt(Math.floor(Math.random() * numbers.length))
    return Numbers
}

function generateTime(){
    let hour = Math.floor(Math.random()*24) 
    let minutes = Math.floor(Math.random()*60)
   
    if(hour<10) hour = "0" + hour
    if(hour==0) hour = "00"
    if(minutes<10) minutes = "0" + minutes

   return hour + ":" + minutes
}


function shuffleUp(){
    const remark = Math.floor(Math.random() * remarks.length)
    flights.shift() // delete everything from table flights
    flights.push({ //inserting data from functions
        time: generateTime(),
        destination: destination[Math.floor(Math.random() * destination.length)],
        flight: generateRandomLetter() + generateRandomLetter() +" "+ generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[remark]
    })
    tableBody.textContent = "" //I need to clear table after generated data from functions
    populateTable() //and insert data again
}

setInterval(shuffleUp, 2000)