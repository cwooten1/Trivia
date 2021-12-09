let myHotel = {
    guestFirstName: "",
    guestLastName: "",
    guestStayLength: 9999,
    guestRoomTypeOptions: ["Single", "Double", "Queen"],
    availableRooms: [ [100, 101, 102, 103] , [200, 201, 202], [301, 303] ],
    bookedRooms: [ [], [], [] ],
    guestRoomType: "",
    guestRoomIndex: 999999,
    selectedGuestRoom: 9999999,
    costOfRooms: [200, 250, 300],
    roomDropDownHTML: "",

    getLengthOfStay: function() {
        let daysStayed = 31
        let daysStayedOptions = "<option value='0'>Select</option>"
 
        for (let i = 1; i < daysStayed; i++) {
            daysStayedOptions += "<option value='"+i+"'>"+i+"</option>"
        }
 
        document.getElementById('lengthOfStay').innerHTML = daysStayedOptions                
    },

    createHTMLRoomList: function() {
        this.roomDropDownHTML = `<select id="dropDownRoomList">`

        for (let i = 0; i < this.availableRooms.length; i++) {
            this.roomDropDownHTML += `<optgroup label="${this.guestRoomTypeOptions[i]}">`
            for (let j = 0; j < this.availableRooms[i].length; j++) {
                this.roomDropDownHTML += `  <option value="${this.availableRooms[i][j]}">${this.availableRooms[i][j]}</option>`
            }
        }
        this.roomDropDownHTML += `</select>`

    
    },

    getGuestInfo: function() {
        this.guestFirstName = document.getElementById("fName").value
        this.guestLastName = document.getElementById("lName").value
        this.guestStayLength = document.getElementById("lengthOfStay").value
        this.selectedGuestRoom = document.getElementById("dropDownRoomList").value 
        this.guestRoomIndex = parseInt(this.selectedGuestRoom[0], 10) - 1
        this.guestRoomType = this.guestRoomTypeOptions[this.guestRoomIndex]
    },

    getGuestRoom: function() { 

        //     availableRooms: [ [100, 101, 102, 103] , [200, 201, 202], [301, 303] ],
        //     this.selectedGuestRoom ===== 201

//      this.availableRooms[1].splice(this.availableRooms[1].indexOf(201), 1)
        this.availableRooms[this.guestRoomIndex].splice(this.availableRooms[this.guestRoomIndex].indexOf(this.selectedGuestRoom), 1)
        this.bookedRooms[this.guestRoomIndex].push(this.selectedGuestRoom)
        this.createHTMLRoomList()
    },
        

    displayGuestSummary: function() {
         /*
        Give the guest a summary of their stay.  Total cost, length of stay.  Thank them.  Welcome them, etc.  Display the summary on the screen after they book.
        */
        let summary = `<strong>Welcome, ${this.guestFirstName} ${this.guestLastName}!</strong> <p>You have chosen to stay in a ${this.guestRoomTypeOptions[this.guestRoomIndex]} room for a total of ${this.guestStayLength} days.</p>
        <p>you will be staying in room ${this.selectedGuestRoom}.</p> 
        <p>The final cost will be $${this.guestStayLength * this.costOfRooms[this.guestRoomIndex]}. Enjoy your stay!</p>`

        document.getElementById("customerSummary").innerHTML = summary

    }, 

   
    getInfoBookRoom: function() {
        this.getGuestInfo()
        this.getGuestRoom()
        this.displayGuestSummary()

    }
 
       
    }

    myHotel.getLengthOfStay()
    myHotel.createHTMLRoomList()

 
// simple output of all of the room numbers
// for (let i = 0; i < available.length; i++) {
//     console.log(`<optgroup label="${roomTypes[i]}">`)
//     for (let j = 0; j < available[i].length; j++) {
//         console.log(`  <option value="${available[i][j]}">${available[i][j]}</option>`)
//     }  
//     console.log(`</optgroup>`)
// } 84677248660