window.addEventListener("load", () => {
    let inputs = document.querySelectorAll("input");

    let permission1 = parseInt(document.getElementById("permission1").textContent);
    let permission2 = parseInt(document.getElementById("permission2").textContent);
    let permission3 = parseInt(document.getElementById("permission3").textContent);

    inputs.forEach((input) => {
        input.addEventListener("click", () => {
            const permission = document.getElementById("permission" + input.getAttribute("permission"));
            if (input.checked) {
                permission.textContent = getPermissionValue(input.getAttribute("permission")) + parseInt(input.value);
            } else {
                permission.textContent = getPermissionValue(input.getAttribute("permission")) - parseInt(input.value);
            }

            document.getElementById("permissionType" + input.getAttribute("permission")).innerHTML = getPermission(
                getPermissionValue(input.getAttribute("permission"))
            );

            document.querySelector(".command-text").value =
                "$ sudo chmon " +
                getPermissionValue(1).toString() +
                getPermissionValue(2).toString() +
                getPermissionValue(3).toString();
        });
    });

    let getPermissionValue = (permission) => {
        return parseInt(document.getElementById("permission" + permission).textContent);
    };

    let getPermission = (permission) => {
        switch (permission) {
            case 0:
                return "---";
                break;

            case 1:
                return "--x";
                break;

            case 2:
                return "-w-";
                break;

            case 3:
                return "-wx";
                break;

            case 4:
                return "r--";
                break;

            case 5:
                return "r-x";
                break;

            case 6:
                return "rw-";
                break;

            case 7:
                return "rwx";
                break;
        }
    };
});
