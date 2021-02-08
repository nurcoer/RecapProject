using System;
using Businesss.Concrete;
using DataAccess.Concrete.EntityFrameWork;



namespace ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {
            CarManager carManager = new CarManager(new EfCarDal());
            foreach (var item in carManager.GetAll())
            {
                Console.WriteLine(item.CarName);
            }
        }
    }
}
