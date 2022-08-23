const stateDefault = {
  arrSV: [
    {
      maSV: "1",
      name: "Nguyễn Văn A",
      phone: "0938213213",
      email: "nguyenvana@gmail.com",
    },
    {
      maSV: "2",
      name: "Nguyễn Văn B",
      phone: "0922222222",
      email: "nguyenvanb@gmail.com",
    },
  ],
  sinhVien: {
    maSV: "",
    name: "",
    phone: "",
    email: "",
  },
  errors: {
    maSV: "",
    name: "",
    phone: "",
    email: "",
  },
  searchArr: [],
};

export const reactFormReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT": {
      let { id, value, dataType } = action.payload;
      let sinhVienUpdate = { ...state.sinhVien };
      let errorsUpdate = { ...state.errors };

      // Validation
      let errorMsg = "";
      if (value.trim() === "") {
        errorMsg = id + " không được để trống!";
      } else {
        if (dataType === "number") {
          let regexNumber = /^\d+$/;
          if (!regexNumber.test(value)) {
            errorMsg = id + " phải là số!";
          }

          if (id === "phone") {
            let phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(value)) {
              errorMsg = id + " phải có 10 số!";
            } else {
              errorMsg = "";
            }
          }
        } else if (dataType === "email") {
          let regexNumber = /[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,}$/;
          if (!regexNumber.test(value)) {
            errorMsg = id + " không đúng định dạng!";
          }
        } else {
          let regexNumber =
            /[a-zA-ZÀÁ ÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/;
          if (!regexNumber.test(value)) {
            errorMsg = id + " không đúng định dạng";
          }
        }
      }

      errorsUpdate[id] = errorMsg;
      sinhVienUpdate[id] = value;
      state.sinhVien = sinhVienUpdate;
      state.errors = errorsUpdate;
      return { ...state };
    }

    case "HANDLE_SUBMIT_STUDENT": {
      let { sinhVien, errors } = action.payload;
      let arrSV = [...state.arrSV];

      let valid = true;

      for (let key in errors) {
        if (errors[key] !== "") {
          valid = false;
          break;
        }

        let sv = arrSV.find((item) => item.maSV === sinhVien.maSV);
        if (sv) {
          valid = false;
          alert("Mã sinh viên đã tồn tại!");
          break;
        }
      }
      if (!valid) {
        console.log("valid:", valid);
        return { ...state };
      }
      let arrSvUpdate = [...state.arrSV];
      arrSvUpdate.push(sinhVien);
      state.arrSV = arrSvUpdate;
      state.sinhVien = { maSV: "", name: "", phone: "", email: "" };
      return { ...state };
    }
    case "HANDLE_DELETE": {
      let { maSVClick } = action.payload;
      let arrSvUpdate = [...state.arrSV];
      arrSvUpdate = arrSvUpdate.filter((item) => item.maSV !== maSVClick);
      state.arrSV = arrSvUpdate;
      return { ...state };
    }
    case "HANDLE_EDIT": {
      let { sinhVienClick } = action.payload;
      let sinhVienUpdate = { ...state.sinhVien };
      sinhVienUpdate = sinhVienClick;
      state.sinhVien = sinhVienUpdate;
      return { ...state };
    }
    case "HANDLE_SUBMIT_UPDATE": {
      let { sinhVien } = action.payload;
      let arrSvUpdate = [...state.arrSV];

      let index = arrSvUpdate.findIndex((item) => item.maSV === sinhVien.maSV);
      arrSvUpdate[index] = sinhVien;
      state.arrSV = arrSvUpdate;
      state.sinhVien = { maSV: "", name: "", phone: "", email: "" };
      return { ...state };
    }
    case "HANDLE_SEARCH": {
      let { searchWord } = action.payload;
      searchWord.toLowerCase().trim();
      if (!searchWord) {
        state.searchArr = [];
      } else {
        let searchResult = [];
        for (let item of state.arrSV) {
          if (
            item.maSV === searchWord ||
            item.name.toLowerCase().includes(searchWord)
          ) {
            searchResult.push(item);
          }
        }
        state.searchArr = searchResult;
      }

      return { ...state };
    }
    default:
      return state;
  }
};
