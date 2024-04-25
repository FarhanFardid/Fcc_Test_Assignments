function telephoneCheck(str) {
    // Remove all non-alphanumeric characters except spaces, hyphens, and parentheses
  let cleanStr = str.replace(/[^\d()-\s]/g, '');
  console.log(cleanStr);

  // Count the digits after cleaning
  let digitCount = cleanStr.replace(/[()-\s]/g, '').length;
  console.log(digitCount);

  // Check if the digit count is either 10 or 11
  if (digitCount === 10 || (digitCount === 11 && cleanStr.charAt(0) === '1')) {
      // Check if the cleaned string matches the pattern
      // return /^1?\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/.test(cleanStr);
      return /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/.test(cleanStr);

  }

  return false;
}

telephoneCheck("-1 (757) 622-7382");