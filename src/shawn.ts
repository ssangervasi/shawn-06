var receivedPhrases: Set<string> = new Set()

const rephrase = (phrase: string, _pedantic: boolean = false): string => {
	if (receivedPhrases.has(phrase)) {
		return "Never send me that atrocious sentence again."
	} else {
		receivedPhrases.add(phrase)
	}

	let doubleLowerS = /ss/g
	while(phrase.search(doubleLowerS) != -1) {
		phrase = phrase.replace(doubleLowerS, "s")
	}

	let lowerSFollowedByAVowel = /s[aeiou]/g
	let sVowelIndex = phrase.search(lowerSFollowedByAVowel)
	while(sVowelIndex != -1) {
		phrase = replaceAt(phrase, sVowelIndex, 1, "sh")
		sVowelIndex = phrase.search(lowerSFollowedByAVowel)
	}

	let doubleLowerSH = /(sh){2,}/g
	while(phrase.search(doubleLowerSH) != -1) {
		phrase = phrase.replace(doubleLowerSH, "sh")
	}

	let lowerCFollowedByIEY = /c[iey]/g
	let lowerCIndex = phrase.search(lowerCFollowedByIEY)
	while(lowerCIndex != -1) {
		phrase = replaceAt(phrase, lowerCIndex, 1, "sh")
		lowerCIndex = phrase.search(lowerCFollowedByIEY)
	}

	let upperCFollowedByIEY = /C[iey]/g
	let upperCIndex = phrase.search(upperCFollowedByIEY)
	while(upperCIndex != -1) {
		phrase = replaceAt(phrase, upperCIndex, 1, "Sh")
		upperCIndex = phrase.search(upperCFollowedByIEY)
	}

	let upperSUpperS = /SS/g
	while(phrase.search(upperSUpperS) != -1) {
		phrase = phrase.replace(upperSUpperS, "S")
	}

	let upperSupperH = /SH/g
	while(phrase.search(upperSupperH) != -1) {
		phrase = phrase.replace(upperSupperH, "Sh")
	}

	let upperSLowerS = /Ss/g
	while(phrase.search(upperSLowerS) != -1) {
		phrase = phrase.replace(upperSLowerS, "Sh")
	}

	let upperSNotFollowedByLowerH = /S(?!h)/g
	while(phrase.search(upperSNotFollowedByLowerH) != -1) {
		phrase = phrase.replace(upperSNotFollowedByLowerH, "Sh")
	}

	let doubleLowerH = /hh/g
	while(phrase.search(doubleLowerH) != -1) {
		phrase = phrase.replace(doubleLowerH, "h")
	}

	let lowerSUpperSFollowedByLowerH = /sSh/g
	let lowerSUpperSFollowedByLowerHIndex = phrase.search(lowerSUpperSFollowedByLowerH)
	while(lowerSUpperSFollowedByLowerHIndex != -1) {
		phrase = replaceAt(phrase, lowerSUpperSFollowedByLowerHIndex, 2, "s")
		lowerSUpperSFollowedByLowerHIndex = phrase.search(lowerSUpperSFollowedByLowerH)
	}

	phrase = replace(phrase, /ea/g, "aw")

	return phrase
}

const replace = (phrase: string, searchRegExp: RegExp, replacement: string) => {
	// let lowerELowerA: number= /ea/g
	while(phrase.search(searchRegExp) != -1) {
		phrase = phrase.replace(searchRegExp, replacement)
	}
	return phrase
}

const replaceAt = (str: string, index: number, lengthToReplace: number = 1, replacement: string) => {
	return str.substr(0, index) + replacement + str.substr(index + lengthToReplace);
}

export { rephrase }
