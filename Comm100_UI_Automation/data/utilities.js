module.exports = {
    /**
     * Gets a date which is after specified number of days
     * @param pos - Point of sale code
     * @param numberOfDays - integer - number of days
     * @returns date in format
     */
    getDateAfterDays: function (pos, numberOfDays, normalizeDates=true, pickupLocale, pickupTimeZone  ) {
        var currentDate = new Date();
        if (pickupLocale && pickupTimeZone) {
            var currentTimeZoneDate = new Date(currentDate.toLocaleDateString(pickupLocale,{timeZone: pickupTimeZone}));
            currentDate = currentTimeZoneDate;
        }
        currentDate.setDate(currentDate.getDate() + numberOfDays);
        var dd = currentDate.getDate();
        var mm = currentDate.getMonth() + 1;
        if (normalizeDates) {
            if (dd < 10) {
                dd = "0" + dd;
            }
            if (mm < 10) {
                mm = "0" + mm;
            }
        }
        var y = currentDate.getFullYear();
        var dateToBeReturned;
        switch (pos) {
            case "DK":
                dateToBeReturned = dd + "/" + mm + "/" + y;
                break;
            case "NO":
            case "AT":
            case "DE":
            case "FI":
            case "SE":
                dateToBeReturned = y + "-" + mm + "-" + dd;
                break;
            case "AARP":
                dateToBeReturned = mm + "/" + dd + "/" + y;
                break;
        }
        return dateToBeReturned;
    },


    /**
     * Gets the next available time when given the current time
     * @param pos - Point of sale code
     * @returns time in format
     */
    getNextAvailableDropdownTime: function (pos, pickUpLocation, currentDate) {
        var newDate = new Date();
        var timeDiff = this.getTimeDifferenceAsPerTimeZone(pickUpLocation);
        newDate.setHours(currentDate.getHours() + timeDiff);
        newDate.setMinutes(currentDate.getMinutes());
        var currenthr = newDate.getHours();
        var currentmin = newDate.getMinutes();
        currentmin = (Math.ceil((currentmin) / 30) * 30);
        if (currentmin == 60) {
            currenthr += 1;
            currentmin = "00";
        }
        if (currentmin == 0) {
            currentmin = "00";
        }
        var ampm = currenthr >= 12 ? "PM" : "AM";
        if (currenthr > 12) {
            currenthr = currenthr - 12;
        }
        var availableTime = currenthr + ":" + currentmin + " " + ampm;
        var timeToBeReturned = this.getTimeAsPerPOSFormat(pos, availableTime);
        return timeToBeReturned;
    },

    /**
     * Gets the next available time when given the current time
     * @param pos - Point of sale code
     * @returns time in format
     */
    getCurrentTimeAsPerPOSFormat: function (pos, currentDate) {
        var newDate = new Date();
        newDate.setDate(currentDate.getDate());
        var currenthr = newDate.getHours();
        var currentmin = newDate.getMinutes();
        if (currentmin < 10) {
            currentmin = "0" + currentmin;
        }
        var ampm = currenthr >= 12 ? "PM" : "AM";
        if (currenthr > 12) {
            currenthr = currenthr - 12;
        }
        var availableTime = currenthr + ":" + currentmin + " " + ampm;
        var timeToBeReturned = this.getTimeAsPerPOSFormat(pos, availableTime);
        return timeToBeReturned;
    },

    /**
     * Gets the timezone difference between home location and given city
     * @param location - city for which the timezone difference needs to be calculated
     * @returns timezone difference in hours
     */
    getTimeDifferenceAsPerTimeZone: function (location) {
        var timeZoneDifference;
        switch (location) {
            case "Paris":
                break;
            case "New York":
                timeZoneDifference = 3;
                break;
            case "Cancun":
                break;
            default:
            case "Redmond":
            case "Seattle":
            case "Bellevue":
                timeZoneDifference = 0;
                break;
        }
        return timeZoneDifference;
    },

    /**
     * Calculate and return the number of days into the date generated in the specified datetime range (to assist usages like WinterFees). Current datetime is taken into account whether it is in or out of the specified range.
     * @param startMonth - start month of range
     * @param startDate - start date of range
     * @param endMonth - end month of range
     * @param endDate - end date of range
     * @param daysFromStart - number of days to generate the date in range from the start date or "1" if current date is 1 day to the end of the range
     * @returns The number of days into the date generated in the specified datetime range
     */
    getDaysFromTodayToDateInRange: function (startMonth, startDate, endMonth, endDate, daysFromStart) {
        var today = new Date();
        var d = new Date();
        startMonth = startMonth - 1;
        endMonth = endMonth - 1;

        var ds = new Date(d.getFullYear(), startMonth, startDate);
        var currentDate = d.getDate();
        var currentMonth = d.getMonth();

        if (currentMonth <= endMonth || currentMonth >= startMonth) {
            if (currentMonth == startMonth) {
                if (currentDate < startDate) {
                    d.setDate(ds.getDate() + daysFromStart);
                }
                else {
                    d.setDate(d.getDate() + daysFromStart);
                }
            }
            else if (currentMonth == endMonth) {
                if (currentDate > endDate) {
                    d.setFullYear(ds.getFullYear(), ds.getMonth(), ds.getDate() + daysFromStart);
                }
                else {
                    d.setDate(d.getDate() + daysFromStart);
                }
            }
            else {
                d.setDate(d.getDate() + daysFromStart);
            }
        }
        else {
            d.setFullYear(ds.getFullYear(), ds.getMonth(), ds.getDate() + daysFromStart);

        }

        // calculate how many days is the target date from today
        var msInDay = 1000 * 60 * 60 * 24; // milliseconds in one day
        return Math.round((d.getTime() - today.getTime()) / msInDay);
    },
    /*
    gets key from data map json in data folder
     */
    getLocalisedStringFromMap: function (globalReference, type, key) {
        var dataMap = require("./datamap.json")
        var keyForString =  dataMap[type][key];
        return globalReference[keyForString];
    }

};