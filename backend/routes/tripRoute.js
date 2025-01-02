const express = require("express");
const router = express.Router();
const {
  getTrips,
  getTrip,
  createTrip,
  deleteTrip,
  updateTrip,
  getTripByRoute,
  getTripsBydate,
} = require("../controller/trip/tripController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.route("/create").post(authMiddleware, roleMiddleware, createTrip);
router.route("/search").get(getTripByRoute);
router.route("/").get(getTrips);
router
  .route("/:id")
  .get(getTrip)
  .patch(authMiddleware, roleMiddleware, updateTrip)
  .delete(authMiddleware, roleMiddleware, deleteTrip);
// .get(getTripsBydate);

module.exports = router;
