export function nameLetterUppercase(name: string, lastName: string): string {
    if (!name && !lastName) return ""

    const nameLetter = name.split(" ")[0]
    const lastNameLetter = lastName.split(" ")[0]

    const nameUppercase = nameLetter.charAt(0).toUpperCase() + nameLetter.slice(1).toLowerCase()
    const lastNameUppercase = lastNameLetter.charAt(0).toUpperCase() + lastNameLetter.slice(1).toLowerCase()

    return `${nameUppercase} ${lastNameUppercase}`
}