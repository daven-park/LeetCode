/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
     const roomSet = new Set([0]);

    for (const room of roomSet) {
      rooms[room].forEach(el => roomSet.add(el))
    }

    return roomSet.size === rooms.length;
};