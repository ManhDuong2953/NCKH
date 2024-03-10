
// Hàm lấy tất cả các triệu chứng từ các object bệnh và kết hợp chúng thành một danh sách triệu chứng duy nhất
function getAllSymptoms(diseases) {
    let allSymptoms = new Set();

    diseases.forEach(disease => {
        disease.symptoms.forEach(symptom => allSymptoms.add(symptom));
    });

    return [...allSymptoms];
}

// Hàm lọc từ khóa từ một đoạn văn bản và chỉ giữ lại các từ khóa có trong danh sách triệu chứng
function filterKeywords(text, symptoms) {
    return symptoms.filter(symptom => new RegExp(symptom, 'gi').test(text));
}

// Hàm tìm kiếm bệnh dựa trên các từ khóa triệu chứng đã lọc và trả về bệnh có nhiều triệu chứng trùng nhất
function findDiseaseWithMostMatchingSymptoms(diseases, keywords) {
    let maxMatchingCount = 0;
    let mostMatchingDisease = null;

    diseases.forEach((disease) => {
        const matchingSymptomsCount = disease.symptoms.filter(symptom => keywords.includes(symptom)).length;
        if (matchingSymptomsCount > maxMatchingCount) {
            maxMatchingCount = matchingSymptomsCount;
            mostMatchingDisease = disease;
        }
    });

    return mostMatchingDisease;
}


// Ví dụ sử dụng các hàm:
const allSymptoms = getAllSymptoms(diseases);
console.log("Tất cả các triệu chứng:", allSymptoms);

