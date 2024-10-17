export default interface Country {
	countryCode: string,
	name: string,
	index: number
}

export default interface Holiday {
	   date: string // Assuming you want to include the date of the holiday
	  countryCode: string
	  name: string
}