let cels = document.querySelector('#celsius');
let fah = document.querySelector('#fahrenheit');

cels.addEventListener('input', function(){
let fahrenheit = (cels.value * 9 / 5) + 32;
fah.value = fahrenheit;
})

fah.addEventListener('input', function(){
let celsius = (fah.value - 32) * 5 / 9;
cels.value = celsius;
})

// 2nd part code of Unit/Currency converter starts here

let select1 = document.querySelector('#length1');
let input1 = document.querySelector('#lengthUnit1');
let select2 = document.querySelector('#length2');
let input2 = document.querySelector('#lengthUnit2');

select1.addEventListener('change', function(){
	select2.addEventListener('change', function(){
		let inp = input1.value;

		if((select1.value == "Millimetre") && (select2.value == "Millimetre")){
			input2.value = inp;
		}
		else if((select1.value == "Millimetre") && (select2.value == "Centimeter")){
			input2.value = inp/10;
		}
		else if((select1.value == "Millimetre") && (select2.value == "Decimeter")){
			input2.value = inp/100;
		}
		else if((select1.value == "Millimetre") && (select2.value == "Meter")){
			input2.value = inp/1000;
		}
		else if((select1.value == "Millimetre") && (select2.value == "kilometer")){
			input2.value = inp/1000000;
		}
		else if((select1.value == "Millimetre") && (select2.value == "inch")){
			input2.value = inp/25.4;
		}
		else if((select1.value == "Millimetre") && (select2.value == "Foot")){
			input2.value = inp / 304.8;
		}
		else if((select1.value == "Millimetre") && (select2.value == "Yard")){
			input2.value = inp / 914.4;
		}
		else if((select1.value == "Millimetre") && (select2.value == "Mile")){
			input2.value = inp / 1.6093E+6;
		}
		else if((select1.value == "Millimetre") && (select2.value == "NauticalMile")){
			input2.value = inp / 1852000;
		}

		// Centimeter unit code starts here

		else if((select1.value == "Centimeter") && (select2.value == "Millimetre")){
			input2.value = inp * 10;
		}
		else if((select1.value == "Centimeter") && (select2.value == "Centimeter")){
			input2.value = inp;
		}
		else if((select1.value == "Centimeter") && (select2.value == "Decimeter")){
			input2.value = inp/10;
		}
		else if((select1.value == "Centimeter") && (select2.value == "Meter")){
			input2.value = inp/100;
		}
		else if((select1.value == "Centimeter") && (select2.value == "kilometer")){
			input2.value = inp/100000;
		}
		else if((select1.value == "Centimeter") && (select2.value == "inch")){
			input2.value = inp/2.54;
		}
		else if((select1.value == "Centimeter") && (select2.value == "Foot")){
			input2.value = inp / 30.48;
		}
		else if((select1.value == "Centimeter") && (select2.value == "Yard")){
			input2.value = inp / 91.44;
		}
		else if((select1.value == "Centimeter") && (select2.value == "Mile")){
			input2.value = inp / 160934.4;
		}
		else if((select1.value == "Centimeter") && (select2.value == "NauticalMile")){
			input2.value = inp / 185200;
		}

		//Decimeter unit code starts here
		
		else if((select1.value == "Decimeter") && (select2.value == "Millimetre")){
			input2.value = inp * 100;
		}
		else if((select1.value == "Decimeter") && (select2.value == "Centimeter")){
			input2.value = inp*10;
		}
		else if((select1.value == "Decimeter") && (select2.value == "Decimeter")){
			input2.value = inp;
		}
		else if((select1.value == "Decimeter") && (select2.value == "Meter")){
			input2.value = inp/10;
		}
		else if((select1.value == "Decimeter") && (select2.value == "kilometer")){
			input2.value = inp/10000;
		}
		else if((select1.value == "Decimeter") && (select2.value == "inch")){
			input2.value = inp*3.93700787;
		}
		else if((select1.value == "Decimeter") && (select2.value == "Foot")){
			input2.value = inp / 3.048;
		}
		else if((select1.value == "Decimeter") && (select2.value == "Yard")){
			input2.value = inp / 9.144;
		}
		else if((select1.value == "Decimeter") && (select2.value == "Mile")){
			input2.value = inp / 16093.44;
		}
		else if((select1.value == "Decimeter") && (select2.value == "NauticalMile")){
			input2.value = inp / 18520;
		}

		//meter unit code starts here

		else if((select1.value == "Meter") && (select2.value == "Millimetre")){
			input2.value = inp*1000;
		}
		else if((select1.value == "Meter") && (select2.value == "Centimeter")){
			input2.value = inp*100;
		}
		else if((select1.value == "Meter") && (select2.value == "Decimeter")){
			input2.value = inp*10;
		}
		else if((select1.value == "Meter") && (select2.value == "Meter")){
			input2.value = inp;
		}
		else if((select1.value == "Meter") && (select2.value == "kilometer")){
			input2.value = inp/1000;
		}
		else if((select1.value == "Meter") && (select2.value == "inch")){
			input2.value = inp*39.3700787;
		}
		else if((select1.value == "Meter") && (select2.value == "Foot")){
			input2.value = inp * 3.2808399;
		}
		else if((select1.value == "Meter") && (select2.value == "Yard")){
			input2.value = inp * 1.0936133;
		}
		else if((select1.value == "Meter") && (select2.value == "Mile")){
			input2.value = inp / 1609.344;
		}
		else if((select1.value == "Meter") && (select2.value == "NauticalMile")){
			input2.value = inp / 1852;
		}

		//kilometer unit code starts here
		else if((select1.value == "kilometer") && (select2.value == "Millimetre")){
			input2.value = inp*1000000;
		}
		else if((select1.value == "kilometer") && (select2.value == "Centimeter")){
			input2.value = inp*100000;
		}
		else if((select1.value == "kilometer") && (select2.value == "Decimeter")){
			input2.value = inp*10000;
		}
		else if((select1.value == "kilometer") && (select2.value == "Meter")){
			input2.value = inp*1000;
		}
		else if((select1.value == "kilometer") && (select2.value == "kilometer")){
			input2.value = inp;
		}
		else if((select1.value == "kilometer") && (select2.value == "inch")){
			input2.value = inp*39370.0787;
		}
		else if((select1.value == "kilometer") && (select2.value == "Foot")){
			input2.value = inp * 3280.8399;
		}
		else if((select1.value == "kilometer") && (select2.value == "Yard")){
			input2.value = inp * 1093.6133;
		}
		else if((select1.value == "kilometer") && (select2.value == "Mile")){
			input2.value = inp / 1.609344;
		}
		else if((select1.value == "kilometer") && (select2.value == "NauticalMile")){
			input2.value = inp / 1.852;
		}

		//inch code starts here
		else if((select1.value == "inch") && (select2.value == "Millimetre")){
			input2.value = inp*25.4;
		}
		else if((select1.value == "inch") && (select2.value == "Centimeter")){
			input2.value = inp*2.54;
		}
		else if((select1.value == "inch") && (select2.value == "Decimeter")){
			input2.value = inp/3.93700787;
		}
		else if((select1.value == "inch") && (select2.value == "Meter")){
			input2.value = inp/39.3700787;
		}
		else if((select1.value == "inch") && (select2.value == "kilometer")){
			input2.value = inp/39370.0787;
		}
		else if((select1.value == "inch") && (select2.value == "inch")){
			input2.value = inp;
		}
		else if((select1.value == "inch") && (select2.value == "Foot")){
			input2.value = inp / 12;
		}
		else if((select1.value == "inch") && (select2.value == "Yard")){
			input2.value = inp / 36;
		}
		else if((select1.value == "inch") && (select2.value == "Mile")){
			input2.value = inp / 63360;
		}
		else if((select1.value == "inch") && (select2.value == "NauticalMile")){
			input2.value = inp / 72913.3858;
		}

		//foot code starts here
		else if((select1.value == "Foot") && (select2.value == "Millimetre")){
			input2.value = inp * 304.8;
		}
		else if((select1.value == "Foot") && (select2.value == "Centimeter")){
			input2.value = inp* 30.48;
		}
		else if((select1.value == "Foot") && (select2.value == "Decimeter")){
			input2.value = inp*3.048;
		}
		else if((select1.value == "Foot") && (select2.value == "Meter")){
			input2.value = inp/3.2808399;
		}
		else if((select1.value == "Foot") && (select2.value == "kilometer")){
			input2.value = inp/3280.8399;
		}
		else if((select1.value == "Foot") && (select2.value == "inch")){
			input2.value = inp*12;
		}
		else if((select1.value == "Foot") && (select2.value == "Foot")){
			input2.value = inp;
		}
		else if((select1.value == "Foot") && (select2.value == "Yard")){
			input2.value = inp / 3;
		}
		else if((select1.value == "Foot") && (select2.value == "Mile")){
			input2.value = inp / 5280;
		}
		else if((select1.value == "Foot") && (select2.value == "NauticalMile")){
			input2.value = inp / 6076.11549;
		}

		//yard code starts here

		else if((select1.value == "Yard") && (select2.value == "Millimetre")){
			input2.value = inp * 914.4;
		}
		else if((select1.value == "Yard") && (select2.value == "Centimeter")){
			input2.value = inp*91.44;
		}
		else if((select1.value == "Yard") && (select2.value == "Decimeter")){
			input2.value = inp*9.144;
		}
		else if((select1.value == "Yard") && (select2.value == "Meter")){
			input2.value = inp/1.0936133;
		}
		else if((select1.value == "Yard") && (select2.value == "kilometer")){
			input2.value = inp/1093.6133;
		}
		else if((select1.value == "Yard") && (select2.value == "inch")){
			input2.value = inp* 36;
		}
		else if((select1.value == "Yard") && (select2.value == "Foot")){
			input2.value = inp * 3;
		}
		else if((select1.value == "Yard") && (select2.value == "Yard")){
			input2.value = inp;
		}
		else if((select1.value == "Yard") && (select2.value == "Mile")){
			input2.value = inp / 1760;
		}
		else if((select1.value == "Yard") && (select2.value == "NauticalMile")){
			input2.value = inp / 2025.37183;
		}

		// mile code starts here
		else if((select1.value == "Mile") && (select2.value == "Millimetre")){
			input2.value = inp*1.6093E+6;
		}
		else if((select1.value == "Mile") && (select2.value == "Centimeter")){
			input2.value = inp*160934.4;
		}
		else if((select1.value == "Mile") && (select2.value == "Decimeter")){
			input2.value = inp*16093.44;
		}
		else if((select1.value == "Mile") && (select2.value == "Meter")){
			input2.value = inp*1609.344;
		}
		else if((select1.value == "Mile") && (select2.value == "kilometer")){
			input2.value = inp*1.609344;
		}
		else if((select1.value == "Mile") && (select2.value == "inch")){
			input2.value = inp*63360;
		}
		else if((select1.value == "Mile") && (select2.value == "Foot")){
			input2.value = inp * 5280;
		}
		else if((select1.value == "Mile") && (select2.value == "Yard")){
			input2.value = inp * 1760;
		}
		else if((select1.value == "Mile") && (select2.value == "Mile")){
			input2.value = inp;
		}
		else if((select1.value == "Mile") && (select2.value == "NauticalMile")){
			input2.value = inp / 1.15077945;
		}

		//nautical mile code starts here

		else if((select1.value == "NauticalMile") && (select2.value == "Millimetre")){
			input2.value = inp* 1852000;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "Centimeter")){
			input2.value = inp*185200;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "Decimeter")){
			input2.value = inp*18520;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "Meter")){
			input2.value = inp*1852;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "kilometer")){
			input2.value = inp*1.852;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "inch")){
			input2.value = inp*72913.3858;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "Foot")){
			input2.value = inp * 6076.11549;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "Yard")){
			input2.value = inp * 2025.37183;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "Mile")){
			input2.value = inp * 1.15077945;
		}
		else if((select1.value == "NauticalMile") && (select2.value == "NauticalMile")){
			input2.value = inp;
		}
		else {
			input2.value = alert("Please select anyone unit from both unit section");
		}
	})

})

select2.addEventListener('change', function(){
	select1.addEventListener('change', function(){
		let inp = input2.value;

		if((select2.value == "Millimetre") && (select1.value == "Millimetre")){
			input1.value = inp;
		}
		else if((select2.value == "Millimetre") && (select1.value == "Centimeter")){
			input1.value = inp/10;;
		}
		else if((select2.value == "Millimetre") && (select1.value == "Decimeter")){
			input1.value = inp/100;
		}
		else if((select2.value == "Millimetre") && (select1.value == "Meter")){
			input1.value = inp / 1000;
		}
		else if((select2.value == "Millimetre") && (select1.value == "kilometer")){
			input1.value = inp / 1000000;
		}
		else if((select2.value == "Millimetre") && (select1.value == "inch")){
			input1.value = inp / 25.4;
		}
		else if((select2.value == "Millimetre") && (select1.value == "Foot")){
			input1.value = inp / 304.8;
		}
		else if((select2.value == "Millimetre") && (select1.value == "Yard")){
			input1.value = inp / 914.4;
		}
		else if((select2.value == "Millimetre") && (select1.value == "Mile")){
			input1.value = inp / 1.6093E+6;
		}
		else if((select2.value == "Millimetre") && (select1.value == "NauticalMile")){
			input1.value = inp / 1852000;
		}

		// Centimeter unit code starts here

		else if((select2.value == "Centimeter") && (select1.value == "Millimetre")){
			input1.value = inp * 10;
		}
		else if((select2.value == "Centimeter") && (select1.value == "Centimeter")){
			input1.value = inp;
		}
		else if((select2.value == "Centimeter") && (select1.value == "Decimeter")){
			input1.value = inp/10;
		}
		else if((select2.value == "Centimeter") && (select1.value == "Meter")){
			input1.value = inp/100;
		}
		else if((select2.value == "Centimeter") && (select1.value == "kilometer")){
			input1.value = inp/100000;
		}
		else if((select2.value == "Centimeter") && (select1.value == "inch")){
			input1.value = inp/2.54;
		}
		else if((select2.value == "Centimeter") && (select1.value == "Foot")){
			input1.value = inp / 30.48;
		}
		else if((select2.value == "Centimeter") && (select1.value == "Yard")){
			input1.value = inp / 91.44;
		}
		else if((select2.value == "Centimeter") && (select1.value == "Mile")){
			input1.value = inp / 160934.4;
		}
		else if((select2.value == "Centimeter") && (select1.value == "NauticalMile")){
			input1.value = inp / 185200;
		}

		//Decimeter unit code starts here
		
		else if((select2.value == "Decimeter") && (select1.value == "Millimetre")){
			input1.value = inp * 100;
		}
		else if((select2.value == "Decimeter") && (select1.value == "Centimeter")){
			input1.value = inp*10;
		}
		else if((select2.value == "Decimeter") && (select1.value == "Decimeter")){
			input1.value = inp;
		}
		else if((select2.value == "Decimeter") && (select1.value == "Meter")){
			input1.value = inp/10;
		}
		else if((select2.value == "Decimeter") && (select1.value == "kilometer")){
			input1.value = inp/10000;
		}
		else if((select2.value == "Decimeter") && (select1.value == "inch")){
			input1.value = inp*3.93700787;
		}
		else if((select2.value == "Decimeter") && (select1.value == "Foot")){
			input1.value = inp / 3.048;
		}
		else if((select2.value == "Decimeter") && (select1.value == "Yard")){
			input1.value = inp / 9.144;
		}
		else if((select2.value == "Decimeter") && (select1.value == "Mile")){
			input1.value = inp / 16093.44;
		}
		else if((select2.value == "Decimeter") && (select1.value == "NauticalMile")){
			input1.value = inp / 18520;
		}

		//meter unit code starts here

		else if((select2.value == "Meter") && (select1.value == "Millimetre")){
			input1.value = inp*1000;
		}
		else if((select2.value == "Meter") && (select1.value == "Centimeter")){
			input1.value = inp*100;
		}
		else if((select2.value == "Meter") && (select1.value == "Decimeter")){
			input1.value = inp*10;
		}
		else if((select2.value == "Meter") && (select1.value == "Meter")){
			input1.value = inp;
		}
		else if((select2.value == "Meter") && (select1.value == "kilometer")){
			input1.value = inp/1000;
		}
		else if((select2.value == "Meter") && (select1.value == "inch")){
			input1.value = inp*39.3700787;
		}
		else if((select2.value == "Meter") && (select1.value == "Foot")){
			input1.value = inp * 3.2808399;
		}
		else if((select2.value == "Meter") && (select1.value == "Yard")){
			input1.value = inp * 1.0936133;
		}
		else if((select2.value == "Meter") && (select1.value == "Mile")){
			input1.value = inp / 1609.344;
		}
		else if((select2.value == "Meter") && (select1.value == "NauticalMile")){
			input1.value = inp / 1852;
		}

		//kilometer unit code starts here
		else if((select2.value == "kilometer") && (select1.value == "Millimetre")){
			input1.value = inp*1000000;
		}
		else if((select2.value == "kilometer") && (select1.value == "Centimeter")){
			input1.value = inp*100000;
		}
		else if((select2.value == "kilometer") && (select1.value == "Decimeter")){
			input1.value = inp*10000;
		}
		else if((select2.value == "kilometer") && (select1.value == "Meter")){
			input1.value = inp*1000;
		}
		else if((select2.value == "kilometer") && (select1.value == "kilometer")){
			input1.value = inp;
		}
		else if((select2.value == "kilometer") && (select1.value == "inch")){
			input1.value = inp*39370.0787;
		}
		else if((select2.value == "kilometer") && (select1.value == "Foot")){
			input1.value = inp * 3280.8399;
		}
		else if((select2.value == "kilometer") && (select1.value == "Yard")){
			input1.value = inp * 1093.6133;
		}
		else if((select2.value == "kilometer") && (select1.value == "Mile")){
			input1.value = inp / 1.609344;
		}
		else if((select2.value == "kilometer") && (select1.value == "NauticalMile")){
			input1.value = inp / 1.852;
		}

		//inch code starts here
		else if((select2.value == "inch") && (select1.value == "Millimetre")){
			input1.value = inp*25.4;
		}
		else if((select2.value == "inch") && (select1.value == "Centimeter")){
			input1.value = inp*2.54;
		}
		else if((select2.value == "inch") && (select1.value == "Decimeter")){
			input1.value = inp/3.93700787;
		}
		else if((select2.value == "inch") && (select1.value == "Meter")){
			input1.value = inp/39.3700787;
		}
		else if((select2.value == "inch") && (select1.value == "kilometer")){
			input1.value = inp/39370.0787;
		}
		else if((select2.value == "inch") && (select1.value == "inch")){
			input1.value = inp;
		}
		else if((select2.value == "inch") && (select1.value == "Foot")){
			input1.value = inp / 12;
		}
		else if((select2.value == "inch") && (select1.value == "Yard")){
			input1.value = inp / 36;
		}
		else if((select2.value == "inch") && (select1.value == "Mile")){
			input1.value = inp / 63360;
		}
		else if((select2.value == "inch") && (select1.value == "NauticalMile")){
			input1.value = inp / 72913.3858;
		}

		//foot code starts here
		else if((select2.value == "Foot") && (select1.value == "Millimetre")){
			input1.value = inp * 304.8;
		}
		else if((select2.value == "Foot") && (select1.value == "Centimeter")){
			input1.value = inp* 30.48;
		}
		else if((select2.value == "Foot") && (select1.value == "Decimeter")){
			input1.value = inp*3.048;
		}
		else if((select2.value == "Foot") && (select1.value == "Meter")){
			input1.value = inp/3.2808399;
		}
		else if((select2.value == "Foot") && (select1.value == "kilometer")){
			input1.value = inp/3280.8399;
		}
		else if((select2.value == "Foot") && (select1.value == "inch")){
			input1.value = inp/12;
		}
		else if((select2.value == "Foot") && (select1.value == "Foot")){
			input1.value = inp;
		}
		else if((select2.value == "Foot") && (select1.value == "Yard")){
			input1.value = inp / 3;
		}
		else if((select2.value == "Foot") && (select1.value == "Mile")){
			input1.value = inp / 5280;
		}
		else if((select2.value == "Foot") && (select1.value == "NauticalMile")){
			input1.value = inp / 6076.11549;
		}

		//yard code starts here

		else if((select2.value == "Yard") && (select1.value == "Millimetre")){
			input1.value = inp * 914.4;
		}
		else if((select2.value == "Yard") && (select1.value == "Centimeter")){
			input1.value = inp*91.44;
		}
		else if((select2.value == "Yard") && (select1.value == "Decimeter")){
			input1.value = inp*9.144;
		}
		else if((select2.value == "Yard") && (select1.value == "Meter")){
			input1.value = inp/1.0936133;
		}
		else if((select2.value == "Yard") && (select1.value == "kilometer")){
			input1.value = inp/1093.6133;
		}
		else if((select2.value == "Yard") && (select1.value == "inch")){
			input1.value = inp* 36;
		}
		else if((select2.value == "Yard") && (select1.value == "Foot")){
			input1.value = inp / 3;
		}
		else if((select2.value == "Yard") && (select1.value == "Yard")){
			input1.value = inp;
		}
		else if((select2.value == "Yard") && (select1.value == "Mile")){
			input1.value = inp / 1760;
		}
		else if((select2.value == "Yard") && (select1.value == "NauticalMile")){
			input1.value = inp / 2025.37183;
		}

		// mile code starts here
		else if((select2.value == "Mile") && (select1.value == "Millimetre")){
			input1.value = inp*1.6093E+6;
		}
		else if((select2.value == "Mile") && (select1.value == "Centimeter")){
			input1.value = inp*160934.4;
		}
		else if((select2.value == "Mile") && (select1.value == "Decimeter")){
			input1.value = inp*16093.44;
		}
		else if((select2.value == "Mile") && (select1.value == "Meter")){
			input1.value = inp*1609.344;
		}
		else if((select2.value == "Mile") && (select1.value == "kilometer")){
			input1.value = inp*1.609344;
		}
		else if((select2.value == "Mile") && (select1.value == "inch")){
			input1.value = inp*63360;
		}
		else if((select2.value == "Mile") && (select1.value == "Foot")){
			input1.value = inp * 5280;
		}
		else if((select2.value == "Mile") && (select1.value == "Yard")){
			input1.value = inp * 1760;
		}
		else if((select2.value == "Mile") && (select1.value == "Mile")){
			input1.value = inp;
		}
		else if((select2.value == "Mile") && (select1.value == "NauticalMile")){
			input1.value = inp / 1.15077945;
		}

		//nautical mile code starts here

		else if((select2.value == "NauticalMile") && (select1.value == "Millimetre")){
			input1.value = inp* 1852000;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "Centimeter")){
			input1.value = inp*185200;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "Decimeter")){
			input1.value = inp*18520;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "Meter")){
			input1.value = inp*1852;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "kilometer")){
			input1.value = inp*1.852;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "inch")){
			input1.value = inp*72913.3858;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "Foot")){
			input1.value = inp * 6076.11549;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "Yard")){
			input1.value = inp * 2025.37183;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "Mile")){
			input1.value = inp * 1.15077945;
		}
		else if((select2.value == "NauticalMile") && (select1.value == "NauticalMile")){
			input1.value = inp;
		}
		else {
			input1.value = alert("Please select anyone unit from both unit section");
		}
	})

})