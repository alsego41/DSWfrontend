```mermaid
classDiagram
    direction RL
    User "0..M" -- "1..1" UserType
    Property "0..M" -- "1..N" User
    Property "0..M" -- "1..1" City
    City "1..1" -- "0..M" User
    Province "1..1" -- "1..M" City
    Price "0..M" --* "1..1" Property
    Service "0..M" -- "0..N" Property
    Booking "0..M" -- "1..1" Property
    Booking "0..M" -- "1..1" User
    class User {
        idUser
        firstName
        lastName
        dni
        email
        bankAccount
        publish()
        listOwnProperties()
        listRentedHistory()
        rent()
        listRentHistory()
    }
    class UserType {
        idType
        nameType
    }
    class Property {
        idProperty
        statusProperty
        address
        zone
        spaces
        roomQty
        bathQty
        backyard
        grill
    }
    class Price {
        priceProperty
        dateUpdated
    }
    class City{
        idCity
        nameCity
        weather
    }
    class Province {
        idProvince
        nameProvince
    }
    class Booking {
        idBooking
        statusBooking
        dateCheckIn
        dateCheckout
    }
    class Service {
        idService
        nameService
    }
    ```