window.addEventListener("load", () => {
    let inputs = document.querySelectorAll("input");

    const permissionType1 = document.getElementById("permissionType1");
    const permissionType2 = document.getElementById("permissionType2");
    const permissionType3 = document.getElementById("permissionType3");

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

            document.getElementById("fullPermissionType").textContent =
                permissionType1.textContent + permissionType2.textContent + permissionType3.textContent;
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
