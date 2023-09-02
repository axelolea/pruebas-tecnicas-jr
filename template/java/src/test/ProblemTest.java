package test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static problem.Problem.solution;


class ProblemTest {

    @Test
    void test () {

        String expected = "Esto es un string";

        assertEquals(expected, solution(4));

    }

}