var mongoose = require('mongoose');
var mongooseIncrement = require('mongoose-increment');
var increment = mongooseIncrement(mongoose);
var Schema = mongoose.Schema;

var usersAccountSchema = new Schema({
	userId: Number,
	userName: String,
	firstName: String,
	lastName: String,
	description: String,
	DOB: Date,
	// Address 
	address1: String,
	address2: String,
	country: String,
	zipCode: String,
	city: String,
	state: String,
	//Contact
	emailId: String,
	phoneCode: String,
	phoneNumber: String,
	// zerv accounts
	
	zervPlatformAcctNumber: Number,
	mfaVerification1: Boolean,
	mfaVerification2: Boolean,
	mfaVerification3: Boolean,
	password: String,
	
	//others
	fflNumber: String,
	ipAddress: String,
	macAddress: String,
	companyDescridescription: String,
	businessClassification: String,
	logo: String,
	fbAccount: String,
	instagramAccount: String,
	twitterAccount: String,
	accountType: String,
	eni: String,
	fflLicenseNo: String,
	fflLicense: String,
	atfLicenseNo: String,
	atfLicenseNo: String,
	itarLicenseNo: String,
	itrLicense: String,
	businesstaxLicenseNo: String,
	businesstaxLicenseNo: String,
	ncage: String,
	dodaac: String,
	divisionNumber: String,
	corporateStructureDescription: String,
	pastPerformancePoc: String,
	altPastPerformancePoc: String,
	correspondenceFlag: String,
	samstatus: String,
	sbaCertificationExpirationDate: Date,
	pscCodes: Array,
	certifications: Object,
	samsDetails: Object,
	//SAM details
	
	duns: String,
	duns4: String,
	cage: String,
	purposeOfRegistration: String,
	registrationDate: Date,
	expirationDate: Date,
	activationDate: Date,
	lastUpdatedDate: Date,
	legalBusinessName: String,
	doingBusinessAsName: String,
	companyDivision: String,
	samAddress: Object,
	congressionalDistrict: String,
	businessStartDate: Date,
	fiscalYearCloseDay: String,
	corporateUrl: String,
	corporateStructureCode: String,
	mailingAddress: Object,
	stateOfIncorporation: String,
	countryOfIncorporation: String,
	govtBusinessPoc: Object,
	altGovtBusinessPoc: String,
	electronicBusinessPoc: Object,
	altElectronicBusinessPoc: Object,
	creditCardUsage: Boolean,
	hasDelinquentFederalDebt: Boolean,
	hasKnownExclusion: Boolean,
	statusMessage: String,
	businessTypes: Array,
	disasterRelief: Array,
	qualifications: Object
	
}); 

usersAccountSchema.plugin(increment, {

	start: 100,
	modelName: 'userAccount',
	fieldName: 'userId',
	unique: true,
	increment: 1,
});
usersAccountSchema.plugin(increment, {

	start: 1000000000,
	modelName: 'userAccount',
	fieldName: 'zervPlatformAcctNumber',
	unique: true,
	increment: 1,
});
var usersAccountModel = mongoose.model('userAccount', usersAccountSchema);

module.exports = usersAccountModel;

