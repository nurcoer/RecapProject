using System;
using System.Collections.Generic;
using System.Text;

namespace Core.CrossCuttingConcerns.Chaching
{
    public interface ICacheManager
    {
        //cach'ten getirdiğimiz verileri generic methodla  çağırırız.
        T Get<T>(string key);

        Object Get(string key);
        //cach ekleme
        void Add(string key, Object value, int duration);
        //daha önceden cach'e atılmışmı istenen değer.
        bool IsAdd(string key);
        //cach'ten silme
        void Remove(string key);
        //gelen değerin başı sonu önemili değil içinde get olanları yada category olanları sil
        void RemoveByPattern(string pattern);
    }
}
