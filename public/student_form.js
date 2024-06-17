
const firebaseConfig = {
	apiKey: "AIzaSyADscpob8pGE28EJDYXh01dNmJJXUk-vuE",
	authDomain: "cloud-test-4efee.firebaseapp.com",
	projectId: "cloud-test-4efee",
	storageBucket: "cloud-test-4efee.appspot.com",
	messagingSenderId: "663397259373",
	appId: "1:663397259373:web:0ac73fb0347575bb8f4764",
	databaseURL: "https://cloud-test-4efee-default-rtdb.firebaseio.com"

  };
  function configureForFirebase(firebase) {
    firebase.INTERNAL.registerService('firestore', function (app) { return new Firestore(app); }, shallowCopy(firestoreNamespace));
}
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

// const storageInImage = async ()=>{
// 	var storageRef = storage.ref();
// 	var imagesRef = await storageRef.child('images');
// 	var spaceRef = await storageRef.child('img03.jpeg');
// 	console.log(spaceRef + "   this is your spaceRef value ");
// 	await ref.put('./img.jpeg').then((snapshot) => {
// 		console.log('Uploaded a blob or file!');
// 	});
// }
// fileUpload = async(e)=>{
// 	// e.preventDefault();
// 	const image = document.querySelector("#image_image").value;
// 	console.log(image);
// }


function doEmplyInput(){
	document.getElementById("student_email").value = "";
	document.getElementById("student_name").value = "";
	document.getElementById("student_fatherName").value = "";
	document.getElementById("student_fatherNumber").value = "";
	document.getElementById("student_MotherName").value = "";
	document.getElementById("student_MotherNumber").value = "";
	document.getElementById("StudentYearofPassing").value = "";
	document.getElementById("MarksObtained").value = "";
	document.getElementById("Mark").value = "";
	document.getElementById("RollNumber").value = "";
	document.getElementById("EntranceExamScore").value = "";
	document.getElementById("RollNumberEntranceExam").value = "";
	document.getElementById("CandidateDOB").value = "";
	document.getElementById("CandidateNumber").value = "";
	document.getElementById("WhatsappNumber").value = "";
	document.getElementById("CandidateCategory").value = "";
	document.getElementById("CandidateAddress").value = "";
	document.getElementById("City").value = "";
	document.getElementById("Dist").value = "";
	document.getElementById("State").value = "";
	document.getElementById("MPDomicile").value = "";
	document.getElementById("Gender").value = "";
	document.getElementById("Pin").value = "";
	document.getElementById("NameofCollege").value = "";
	document.getElementById("Course").value = "";
	document.getElementById("Branch").value = "";
	document.getElementById("NameofBoardUniversity").value = "";
	document.getElementById("YearofPassing").value = "";
	document.getElementById("AadharCardNumber").value = "";
}
const addData = ()=>{
	authonticaltion(document.getElementById("student_email").value , "bgi12345bhopal")
	db.collection("users").add({
		student_email:document.getElementById("student_email").value,
		student_email:document.getElementById("student_name").value,
		student_fatherName:document.getElementById("student_fatherName").value,
		student_fatherNumber:document.getElementById("student_fatherNumber").value,
		student_MotherName:document.getElementById("student_MotherName").value,
		student_MotherNumber:document.getElementById("student_MotherNumber").value,
		StudentYearofPassing:document.getElementById("StudentYearofPassing").value,
		MarksObtained:document.getElementById("MarksObtained").value,
		
		Mark:document.getElementById("Mark").value,
		RollNumber:document.getElementById("RollNumber").value,
		EntranceExamScore:document.getElementById("EntranceExamScore").value,
		RollNumberEntranceExam:document.getElementById("RollNumberEntranceExam").value,
		CandidateDOB:document.getElementById("CandidateDOB").value,
		CandidateNumber:document.getElementById("CandidateNumber").value,
		WhatsappNumber:document.getElementById("WhatsappNumber").value,
		CandidateCategory:document.getElementById("CandidateCategory").value,
		CandidateAddress:document.getElementById("CandidateAddress").value,
		City:document.getElementById("City").value,
		Dist:document.getElementById("Dist").value,
		State:document.getElementById("State").value,
		MPDomicile:document.getElementById("MPDomicile").value,
		Gender:document.getElementById("Gender").value,
		Pin:document.getElementById("Pin").value,
		NameofCollege:document.getElementById("NameofCollege").value,
		Course:document.getElementById("Course").value,
		Branch:document.getElementById("Branch").value,
		NameofBoardUniversity:document.getElementById("NameofBoardUniversity").value,
		YearofPassing:document.getElementById("YearofPassing").value,
		AadharCardNumber:document.getElementById("AadharCardNumber").value,
		SelfImage:uploadImage("files1", 0),
		marksite_10th :uploadImage("files2", 1),
		marksite_12th :uploadImage("files3", 2),
		IncomeCertificate:uploadImage("files4", 3),
		BA_III:uploadImage("files5", 4),
		Caste:uploadImage("files6", 5),
		Domicile:uploadImage("files7",6),
		Aadhar:uploadImage("files8", 7),

	} )
	.then((docRef) => {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch((error) => {
		console.error("Error adding document: ", error);
	});
	doEmplyInput();
	alert("your data upload dhiraj")
	

}


const getData = async ()=>{
	await db.collection("users").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data()}`);
			let obj = doc.data();
			console.log(obj.first + " first name ");
			console.log(obj.last + " first name ");
			console.log(obj.born + " first name ");
			console.log("DHIRAJ MATHANAKR NICE BROTHER ");
		});
	});
 }

 const getData2 = async ()=>{
	await db.collection("users").get().then((doc) => {
		if (doc.length != 0) {
			doc.forEach(rec=>{
				let obj = rec.data();
				console.log(obj.first);
				console.log(obj.last + " first name ");
				console.log(obj.born + " first name ");
			})
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch((error) => {
		console.log("Error getting document:", error);
	});
 }

 
const authonticaltion = (Email, password)=>{
	firebase.auth().createUserWithEmailAndPassword(Email, password)
	.then((userCredential) => {
	  var user = userCredential.user;
	//   console.log(user + "   " + "DHIRAJ MATHANKAR ");
	})
	.catch((error) => {
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  alert("This Email Already Exsting You No File This Form...")
	});
}


// --------------------------------------------------- GFG COPY CODE DHIRAJ MATHANAKR  ----------------------
function uploadImage(id_name, imageIndex){
	const ref = firebase.storage().ref();
	let file = document.getElementById(`${id_name}`).files[0];
	const name = new Date()  + "-" + file.name ;
	const metadata = {
		contentType:file.type
	}
	const task = ref.child("image").child(name).put(file, metadata);

    task.then(snapshot => {snapshot.ref.getDownloadURL()
	// 	console.log("image 10")
	// document.getElementById("progress_bar").style.width = `${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}%` ;
	// var percentage =
	// (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	// console.log(percentage + "-------------")
}).then(url => {
// 		console.log(url)
// 		console.log("image 60")
// 		console.log("Image Upload Successful dhiraj ");
// 		alert("image Upload Successfully Dhiraj Mathanakr ");
// 		const image = document.querySelector("#imge_file");
// console.log("image 100")
// 	// image.src = url
	})
	// console.log(ref + "v dhiraj " + files.name)
	document.getElementById(`${id_name}`).value = "";
return name ;
}