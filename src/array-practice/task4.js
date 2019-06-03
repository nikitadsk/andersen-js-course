/**
 * Реализовать функцию union в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива, и возвращает массив объедененных значений,
 * без дублирования
 *
 * console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
 * console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]
 */

// eslint-disable-next-line import/prefer-default-export
export function union(arr1, arr2) {
  const result = [];

  arr1.forEach(element => {
    if (result.indexOf(element) === -1) result.push(element);
  });

  arr2.forEach(element => {
    if (result.indexOf(element) === -1) result.push(element);
  });

  return result;
}
