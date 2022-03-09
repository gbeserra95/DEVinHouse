void deTrasPraFrente()
{
  List<int> array = new List<int>();

  Console.WriteLine("Input an integer: ");
  var nString = Console.ReadLine();

  int nInt;

  while (!int.TryParse(nString, out nInt))
  {
    Console.WriteLine("This is not an integer!");
    nString = Console.ReadLine();
  }

  for (int i = 0; i < nInt; i++)
  {
    Console.WriteLine("Input an integer as element of your array: ");
    var inputString = Console.ReadLine();

    int inputInteger;

    while (!int.TryParse(inputString, out inputInteger))
    {
      Console.WriteLine("This is not an integer!");
      inputString = Console.ReadLine();
    }

    array.Add(inputInteger);
  }

  array.Reverse();

  foreach (int element in array)
  {
    Console.Write($"{element} ");
  }

  Console.Write("\n");
}

deTrasPraFrente();