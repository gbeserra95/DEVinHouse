void NotasDaTurma()
{
  List<int> Notas = new List<int>();
  int maiorNota = 0;
  int menorNota = 100;
  int soma = 0;

  for (int i = 0; i < 30; i++)
  {
    int nota = new Random().Next(0, 100);

    if (nota > maiorNota)
    {
      maiorNota = nota;
    }

    if (nota < menorNota)
    {
      menorNota = nota;
    }

    soma += nota;

    Notas.Add(nota);
  }

  Console.WriteLine($"Maior Nota: {maiorNota}");
  Console.WriteLine($"Menor Nota: {menorNota}");
  Console.WriteLine($"Media: {(soma / 30.00).ToString("N2")}");
}

NotasDaTurma();