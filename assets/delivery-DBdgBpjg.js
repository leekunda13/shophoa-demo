function n(e){if(!Number.isFinite(e)||e<0)throw new Error("Khoảng cách không hợp lệ");return e>=15?null:3e4+Math.ceil(Math.max(0,e-5))*3e3}export{n as tamHoaFee};
