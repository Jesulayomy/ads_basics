#include "cs50.h"
#include <stdio.h>
#include <stdlib.h>


/**
 * Node: A node, which holds a number, and a link to
 * another node.
 * int number;
 * struct node *next;
 */
typedef struct node {
    int number;
    struct node *next;
} node;

int main(void) {
    node *list = NULL;

    for (int i = 0; i < 3; i++) {
        node *n = malloc(sizeof(node));
        if (n == NULL) {
            return 1;
        }
        n->number = get_int("Number: ");
        (*n).next = NULL;
        n->next = list;

        list = n;
    }
    node *ptr = list;
    while (ptr != NULL) {
        printf("%i -> ", ptr->number);
        ptr = ptr->next;
    }
    printf("NULL\n");
}