package test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static problem.SumaProducto.solution;


class SumaProductoTest {

    @Test
    void firstEvenSumTest () {

        int[] arr = {4, 5, 8, 11};
        int expected = 1760;

        assertEquals(expected, solution(arr));

    }

    @Test
    void firstOddSumTest () {
        int[] arr = {9, 12, 6, 3, 7};
        int expected = 0;

        assertEquals(expected, solution(arr));
    }

}