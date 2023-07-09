const students = [
    {
        name: "Leonardo",
        firstGrade: 7,
        secondGrade: 7,
    },
    {
        name: "Mayk",
        firstGrade: 10,
        secondGrade: 9,
    },
    {
        name: "Diego",
        firstGrade: 9,
        secondGrade: 10,
    },
    {
        name: "João",
        firstGrade: 4,
        secondGrade: 7,
    },
]

for (let student of students) {
    let studentMedia = calcMedia(student.firstGrade, student.secondGrade)

    alert(`O aluno ${student.name} teve a média de ${studentMedia}.
${verifyApproval(studentMedia, student.name)}`)
}

function calcMedia(grade1, grade2) {
    return ((grade1 + grade2) / 2).toFixed(2)
}

function verifyApproval(media, name) {
    if (media >= 7) {
        return `Parabéns, ${name}! Você foi aprovado(a)`
    } else {
        return `Não foi dessa vez, ${name}, tente novamente!!`
    }
}