from models import Animal, Dog, Cat


def main():
    animal1 = Animal("Generic Animal", 5, "Brown")
    dog1 = Dog("Buddy", 3, "Black", "Labrador")
    cat1 = Cat("Luna", 2, "White", 9)

    animals = [animal1, dog1, cat1]

    for animal in animals:
        print(animal)
        print(animal.speak())
        print(animal.eat())

        if isinstance(animal, Dog):
            print(animal.fetch())
        elif isinstance(animal, Cat):
            print(animal.climb())

        print("-" * 40)


if __name__ == "__main__":
    main()