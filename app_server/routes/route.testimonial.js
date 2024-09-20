// var express = require("express");
// var router = express.Router();

// var testimonial = require("../controllers/controller.testimonial.js");

// //Add Testimonial
// router.post("/add", function (req, res) {
//   var testimonialForm = req.body;

//   console.log(testimonialForm);
//   testimonial.addTestimonial(testimonialForm, function (err, result) {
//     if (err) {
//       console.log(err);
//       return res.json({
//         error: err,
//         status: false,
//       });
//     } else {
//       return res.json({
//         message: "Testimonial form submitted successfully",
//         status: true,
//         data: result,
//       });
//     }
//   });
// });

// //Get All testimonial form list
// router.get("/get_all", function (req, res) {
//   testimonial.getAllTestimonial(function (err, result) {
//     if (err) {
//       console.log(err);
//       return res.json({
//         error: err,
//         status: false,
//       });
//     } else if (result.length > 0) {
//       return res.json({
//         message: "testimonial form Exist",
//         status: true,
//         data: result,
//       });
//     } else {
//       return res.json({
//         message: "No testimonial form Exist",
//         status: false,
//         data: result,
//       });
//     }
//   });
// });

// //Update testimonial form
// router.patch("/update/:testimonialId", function (req, res) {
//   var testimonialForm = req.body;
//   var testimonialId = req.params.testimonialId;
//   console.log(testimonialForm);

//   testimonial.updateTestimonial(
//     testimonialId,
//     testimonialForm,
//     { new: true },
//     function (err, result) {
//       if (err) {
//         console.log(err);
//         return res.json({
//           error: err,
//           status: false,
//         });
//       } else {
//         return res.json({
//           message: "Testimonial form updated successfully",
//           status: true,
//           data: result,
//         });
//       }
//     }
//   );
// });

// // Remove testimonial By Id
// router.delete("/delete/:testimonialId", function (req, res) {
//   testimonial.removeByid(req.params.testimonialId, function (err, result) {
//     if (err) {
//       console.log(err);
//       return res.json({
//         error: err,
//         status: false,
//       });
//     } else if (result) {
//       return res.json({
//         message: "Testimonial form data removed",
//         status: true,
//       });
//     } else {
//       return res.json({
//         message: "Testimonial form not removed",
//         status: false,
//       });
//     }
//   });
// });

// //GET Testimonials For Landing Page
// router.get("/get_testimonials_for_landing_page", function (req, res) {
//   testimonial.getTestimonialsForLandingPage(function (err, result) {
//     if (err) {
//       console.log(err);
//       return res.json({
//         error: err,
//         status: false,
//       });
//     } else if (result.length > 0) {
//       return res.json({
//         message: "Testimonial form Exist",
//         status: true,
//         data: result,
//       });
//     } else {
//       return res.json({
//         message: "No Testimonial form Exist",
//         status: false,
//         data: result,
//       });
//     }
//   });
// });


// module.exports = router;





var express = require("express");
var router = express.Router();

var testimonial = require("../controllers/controller.testimonial.js");

// Add Testimonial
router.post("/add", function (req, res) {
  var testimonialForm = req.body;

  console.log(testimonialForm);
  testimonial.addTestimonial(testimonialForm, function (err, result) {
    if (err) {
      console.log(err);
      return res.json({
        error: err,
        status: false,
      });
    } else {
      return res.json({
        message: "Testimonial form submitted successfully",
        status: true,
        data: result,
      });
    }
  });
});

// Get All Testimonials
router.get("/get_all", function (req, res) {
  testimonial.getAllTestimonial(function (err, result) {
    if (err) {
      console.log(err);
      return res.json({
        error: err,
        status: false,
      });
    } else if (result.length > 0) {
      return res.json({
        message: "Testimonial forms exist",
        status: true,
        data: result,
      });
    } else {
      return res.json({
        message: "No testimonial forms exist",
        status: false,
        data: result,
      });
    }
  });
});

// Update Testimonial
router.put("/update/:testimonialId", function (req, res) {
  var testimonialForm = req.body;
  var testimonialId = req.params.testimonialId;
  console.log(testimonialForm);

  testimonial.updateTestimonial(
    testimonialId,
    testimonialForm,
    { new: true },
    function (err, result) {
      if (err) {
        console.log(err);
        return res.json({
          error: err,
          status: false,
        });
      } else {
        return res.json({
          message: "Testimonial form updated successfully",
          status: true,
          data: result,
        });
      }
    }
  );
});

// Remove Testimonial By Id
router.delete("/delete/:testimonialId", function (req, res) {
  testimonial.removeByid(req.params.testimonialId, function (err, result) {
    if (err) {
      console.log(err);
      return res.json({
        error: err,
        status: false,
      });
    } else if (result) {
      return res.json({
        message: "Testimonial form data removed",
        status: true,
      });
    } else {
      return res.json({
        message: "Testimonial form not removed",
        status: false,
      });
    }
  });
});

// Get Testimonials For Landing Page
router.get("/get_testimonials_for_landing_page", function (req, res) {
  testimonial.getTestimonialsForLandingPage(function (err, result) {
    if (err) {
      console.log(err);
      return res.json({
        error: err,
        status: false,
      });
    } else if (result.length > 0) {
      return res.json({
        message: "Testimonials for landing page exist",
        status: true,
        data: result,
      });
    } else {
      return res.json({
        message: "No testimonials for landing page exist",
        status: false,
        data: result,
      });
    }
  });
});

// Block Testimonial by ID
router.put("/block/:testimonialId", function (req, res) {
  var testimonialId = req.params.testimonialId;

  testimonial.blockTestimonial(testimonialId, function (err, result) {
    if (err) {
      console.log(err);
      return res.json({
        error: err,
        status: false,
      });
    } else if (result) {
      return res.json({
        message: "Testimonial blocked/unblocked successfully",
        status: true,
        data: result,
      });
    } else {
      return res.json({
        message: "Testimonial not found",
        status: false,
      });
    }
  });
});

module.exports = router;
