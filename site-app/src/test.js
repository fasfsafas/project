"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const company = {
    profits: 3200000,
    workers: 416,
    workersQuit: 60,
    workersNew: 45
};
//console.log(company)
company.workers = 400;
company.workersQuit = 44;
company.workersNew = 64;
const vacationOrder = {
    nameEmp: "Гугу гага",
    date: "14 марта",
    isFamily: false,
    daysInVacation: 7,
    package: "travel"
};
var VacationPackage;
(function (VacationPackage) {
    VacationPackage["in_city"] = "\u0432 \u0433\u043E\u0440\u043E\u0434\u0435";
    VacationPackage["country"] = "\u043F\u043E \u0441\u0442\u0440\u0430\u043D\u0435";
    VacationPackage["travel"] = "\u0437\u0430\u0433\u0440\u0430\u043D\u0438\u0446\u0443";
})(VacationPackage || (VacationPackage = {}));
const getFamilyText = (isFamily) => {
    if (isFamily) {
        return "с семьей";
    }
    return "в одиночку";
};
//console.log(`Сотрудник ${vacationOrder.nameEmp} ${getFamilyText(vacationOrder.isFamily)} берет отпуск ${vacationOrder.date} на ${vacationOrder.daysInVacation} дней ${VacationPackage[vacationOrder.package]}`)
const months = ["Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май"];
for (let i = 0; i < 6; i++) {
    //console.log(months[i])
}
const human = {
    name: "Джамал",
    age: 46
};
const person = {
    ...human,
    speciality: "Гангстер"
};
const p1 = {
    title: "BOSH-30",
    category: "Холодильник",
    price: 150000,
};
const m = [p1, p1, p1];
console.log("Первая задача");
function calculateDamage(baseDamage, targetArmor, attackType) {
    if (attackType === "Magical") {
        return baseDamage;
    }
    else {
        if (baseDamage - targetArmor < 0) {
            return 0;
        }
        else {
            return baseDamage - targetArmor;
        }
    }
}
console.log(calculateDamage(10, 5, "Magical"));
console.log(calculateDamage(20, 11, "Physical"));
console.log(calculateDamage(-5, 0, "Physical"));
console.log("Вторая задача");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Processing"] = 0] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getClientNotification(status) {
    switch (status) {
        case OrderStatus.Processing:
            return "Ваш заказ собирается";
            break;
        case OrderStatus.Shipped:
            return "Заказ передан на доставку";
            break;
        case OrderStatus.Delivered:
            return "Заказ успешно доставлен";
            break;
        case OrderStatus.Cancelled:
            return "Заказ отменен";
            break;
        default:
            return "Статус неизвестен. Обратитесь в поддержку";
    }
}
console.log(getClientNotification(OrderStatus.Shipped));
