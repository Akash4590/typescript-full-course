"use strict";
class Student {
    login(name, password) {
        if (name && password) {
            return "student login";
        }
        else {
            return "student is not login";
        }
    }
    result(marks) {
        if (marks > 33) {
            return "pass";
        }
        else {
            return "fail";
        }
    }
}
//# sourceMappingURL=inheritance.js.map