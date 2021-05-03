var express = require('express');
var router = express.Router();
var multer  = require('multer');

var District = require('../controllers/district');

var Country = require('../controllers/country');
var State = require('../controllers/state');
var City = require('../controllers/city');
var Academy = require('../controllers/academy');
var ADformat = require('../controllers/adformat');
var AgeGroup = require('../controllers/agegroup');
var Channel = require('../controllers/channeltype');
var Club = require('../controllers/club');
var CMSPage = require('../controllers/cmspage');
var CompanyIndustry = require('../controllers/companyindustry');
var CompanyType = require('../controllers/companytype');
var ConnType = require('../controllers/connectiontype');
var Currency = require('../controllers/currencies');
var EventType = require('../controllers/eventtype');
var faqCategory = require('../controllers/faqcategory');
var FoobAllLevel = require('../controllers/fooballlevel');
var FootAllType = require('../controllers/footballtype');
var Hooby = require('../controllers/hobby');
var Interest = require('../controllers/interest');
var JobFunction = require('../controllers/jobfunction');
var JobTypes = require('../controllers/jobtype');
var Language = require('../controllers/language');
var PlayerPosition = require('../controllers/playerposition');
var Reasons = require('../controllers/reasons');
var SecurityQuestions = require('../controllers/securityquestions');
var Skill = require('../controllers/skill');
var TaxType = require('../controllers/taxtype');
var AppUserRole = require('../controllers/appuserrole');
var AppUserType = require('../controllers/appusertype');
var Students = require('../controllers/users');
var Userlocation = require('../controllers/userlocation');
var Usereducation = require('../controllers/usereducation');
var Useremployement = require('../controllers/useremployement');
var Userhobbies = require('../controllers/userhobbies');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'demo' });
});
// about page 
router.get('/about', function(req, res) {
  res.render('/about');
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/');
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = '';
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  }
});
var upload = multer({storage: storage});

/*File Upload*/
router.post('/upload',upload.single('FileField'),function(req, res, next) {
//console.log(req);
if(!req.body) {
  res.status(500);
  return next(err);
}

res.json({ fileUrl: '/images/' + req.file.filename });
})
/*Masters list*/

router.post('/district/list', District.districtList);


router.post('/country/list', Country.countryList);
router.post('/state/list', State.stateList);
router.post('/city/list', City.cityList);
router.post('/academy/list', Academy.academyList);
router.post('/adformat/list', ADformat.adformatList);
router.post('/agegroup/list', AgeGroup.agegroupList);
router.post('/channeltype/list', Channel.getChanelList);
router.post('/club/list', Club.clubList);
router.post('/cmspage/list', CMSPage.CMSPageList);
router.post('/companyindustry/list', CompanyIndustry.companyList);
router.post('/companytype/list', CompanyType.companyTypeList);
router.post('/connectiontype/list', ConnType.connectionTypeList);
router.post('/currencies/list', Currency.currencyList);
router.post('/eventtype/list', EventType.eventTypeList);
router.post('/faqcategory/list', faqCategory.faqCategoryList);
router.post('/fooballlevel/list', FoobAllLevel.foobAllLevelList);
router.post('/footalltype/list', FootAllType.footAllTypeList);
router.post('/hobby/list', Hooby.hobbiesList);
router.post('/interest/list', Interest.interestList);
router.post('/jobfunction/list', JobFunction.jobFunctionList);
router.post('/jobtype/list', JobTypes.jobTypeList);
router.post('/language/list', Language.LanguageList);
router.post('/playerposition/list', PlayerPosition.PlayerPositionList);
router.post('/reasons/list', Reasons.ReasonsList);
router.post('/securityquestions/list', SecurityQuestions.SecurityQuestions);
router.post('/skill/list', Skill.SkillList);
router.post('/texttype/list', TaxType.TaxTypeList);
router.post('/appuserrole/list', AppUserRole.AppUserRoleList);
router.post('/appusertype/list', AppUserType.AppUserTypeList);


/*On Boarding*/
router.post('/users/user-registration', Students.add);
router.post('/users/user-login-password', Students.login);
router.post('/users/user-update-profile', Students.updateProfile);
router.post('/users/user-update-profile-picture', Students.updateProfilePicture);
//router.post('/users/user-update-settings', Students.updateSetttings);
router.post('/users/user-check-duplication', Students.checkDuplicate);
router.post('/users/user-forgot-password', Students.forgotPassword);
router.post('/users/change-password', Students.changePassword);
router.post('/users/verification-otp', Students.verificationOTP);
router.post('/users/user-login-mobile', Students.loginWithMobile);
//router.post('/users/user-forgetpassword-mobile', Students.forgotPasswordWithMobile);
router.post('/users/resend-otp', Students.resendOTP);

/*User Profile*/
router.post('/userlocation/add-current-country', Userlocation.add);
router.post('/userlocation/add-current-city', Userlocation.addCity);
router.post('/userlocation/update-current-city', Userlocation.updateCity);
router.post('/userlocation/update-current-country', Userlocation.updateLocation);
router.post('/usereducation/add-education', Usereducation.add);
router.post('/usereducation/update-education', Usereducation.update);
router.post('/usereducation/delete-education', Usereducation.remove);
router.post('/usereducation/list-education', Usereducation.list);
router.post('/useremployement/add-employment', Useremployement.add);
router.post('/useremployement/update-employment', Useremployement.update);
router.post('/useremployement/delete-employment', Useremployement.remove);
router.post('/useremployement/list-employment', Useremployement.list);
router.post('/userhobby/add-hobby', Userhobbies.add);
router.post('/userhobby/update-hobby', Userhobbies.update);
router.post('/userhobby/delete-hobby', Userhobbies.remove);
router.post('/userhobby/list-hobby', Userhobbies.list);



module.exports = router;
