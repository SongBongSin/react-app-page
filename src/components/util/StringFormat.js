export function CouponFormat(string) {
  return string.substring(0,4)+"-"+string.substring(4,8)+"-"+string.substring(8,12);
}

export function phoneFormat(string) {
	  return string.substring(0,3)+"-"+string.substring(3,7)+"-"+string.substring(7,11);
}

export function relpace_(string) {
	  return string.replace (/-/gi,"");
}
